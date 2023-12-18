from flask import Flask, request, jsonify
import tensorflow as tf
from keras.models import load_model
import pandas as pd
import os
from sklearn.preprocessing import LabelEncoder, StandardScaler
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
model = load_model('./models/dnn/')
mapping_folder_path = './categories'
file_extension = '.txt'
file_list = [file_name for file_name in os.listdir(mapping_folder_path) if file_name.endswith(file_extension)]
df_train = pd.read_csv('./data/adult.data')
df_train = df_train.drop('income', axis=1).drop('fnlwgt', axis=1)
for file_name in file_list:
    column = file_name.split('.')[0]
    if column == 'income':
        continue
    with open(f'./categories/{file_name}', 'r') as file:
        labels = []
        for line in file:
            labels.append(line.strip())
        label_encoder = LabelEncoder()
        label_encoder.fit(labels)
        df_train[column] = label_encoder.transform(df_train[column])
scaler = StandardScaler()
scaler.fit(df_train)


def raw_to_df(data):
    df = pd.DataFrame([data])
    return df


def encode_data(data):
    output_data = data
    for file_name in file_list:
        column = file_name.split('.')[0]
        if column == 'income':
            continue
        with open(f'./categories/{file_name}', 'r') as file:
            labels = []
            for line in file:
                labels.append(line.strip())
        label_encoder = LabelEncoder()
        label_encoder.fit(labels)
        output_data[column] = label_encoder.transform(output_data[column])
    return output_data


def standardize(data):
    output_data = data
    output_data = scaler.transform(output_data)
    return output_data


def preprocess(data):
    df = raw_to_df(data)
    encodeded = encode_data(df)
    standardized = standardize(encodeded)
    return standardized


def postprocess(prediction):
    return '> 50k' if prediction > 0.5 else '<= 50k'


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    input_data = preprocess(data)
    prediction = model.predict(input_data)
    result = postprocess(prediction)
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True, port=5000)