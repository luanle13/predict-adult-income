"use client";

import {
  EDUCATION,
  EducationOptions,
  MARITAL_STATUS,
  MaritalStatusOptions,
  NATIVE_COUNTRY,
  NativeCountryOptions,
  OCCUPATION,
  OccupationOptions,
  RACE,
  RELATIONSHIP,
  RaceOptions,
  RelationshipOptions,
  SEX,
  SexOptions,
  WORK_CLASS,
  WorkClassOptions,
} from "@/constant/predict.constant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "./ui/form";
import { ControlledInput } from "./ui/input";
import { ControlledCombobox } from "./ui/combobox";
import { Button } from "./ui/button";
import { useState } from "react";

const FormSchema = z.object({
  age: z.coerce
    .number({ required_error: "Thpis field is required" })
    .int({ message: "This field should be an integer" })
    .min(0, { message: "This field must not be smaller than 0" })
    .max(80, { message: "This field must not be greater than 80" }),
  workclass: z.enum(WORK_CLASS, { required_error: "This field is required" }),
  education: z.enum(EDUCATION, { required_error: "This field is required" }),
  educationNum: z.coerce
    .number({ required_error: "This field number is required" })
    .int({ message: "This field should be an integer" }),
  maritalStatus: z.enum(MARITAL_STATUS, {
    required_error: "This field status is required",
  }),
  occupation: z.enum(OCCUPATION, { required_error: "This field is required" }),
  relationship: z.enum(RELATIONSHIP, {
    required_error: "This field is required",
  }),
  race: z.enum(RACE, { required_error: "This field is required" }),
  sex: z.enum(SEX, { required_error: "This field is required" }),
  capitalGain: z.coerce
    .number({ required_error: "This field is required" })
    .int({ message: "This field should be an integer" })
    .min(0, { message: "This field must not be smaller than 0" }),
  capitalLoss: z.coerce
    .number({ required_error: "This field is required" })
    .int({ message: "This field should be an integer" })
    .min(0, { message: "This field must not be smaller than 0" }),
  hoursPerWeek: z.coerce
    .number({ required_error: "This field is required" })
    .int({ message: "This field should be an integer" })
    .min(0, { message: "This field must not be smaller than 0" }),
  nativeCountry: z.enum(NATIVE_COUNTRY, {
    required_error: "This field is required",
  }),
});

export function PredictForm() {
  const [result, setResult] = useState("...");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      age: 1,
      capitalGain: 0,
      capitalLoss: 0,
      education: "10th",
      educationNum: 1,
      hoursPerWeek: 0,
      maritalStatus: "Divorced",
      nativeCountry: "Cambodia",
      occupation: "Adm-clerical",
      race: "Amer-Indian-Eskimo",
      relationship: "Husband",
      sex: "Female",
      workclass: "Federal-gov",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    try {
      const body = {
        age: data.age,
        workclass: data.workclass,
        education: data.education,
        "education-num": data.educationNum,
        "marital-status": data.maritalStatus,
        occupation: data.occupation,
        relationship: data.relationship,
        race: data.race,
        sex: data.sex,
        "capital-gain": data.capitalGain,
        "capital-loss": data.capitalLoss,
        "hours-per-week": data.hoursPerWeek,
        "native-country": data.nativeCountry,
      };
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: JSON.stringify(body),
      });
      if (response.ok) {
        const responseData = await response.json();
        setResult(responseData);
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="md:w-2/3 md:pr-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-6"
          >
            <div className="grid grid-cols-5 gap-4">
              <ControlledInput
                control={form.control}
                name="age"
                label="Age"
                inputProps={{
                  placeholder: "Enter age...",
                  type: "number",
                  className: "col-span-1",
                }}
              />
              <ControlledInput
                control={form.control}
                name="educationNum"
                label="Education Number"
                inputProps={{
                  placeholder: "Enter education number...",
                  type: "number",
                  className: "col-span-1",
                }}
              />
              <ControlledInput
                control={form.control}
                name="capitalGain"
                label="Capital Gain"
                inputProps={{
                  placeholder: "Enter capital gain...",
                  type: "number",
                  className: "col-span-1",
                }}
              />
              <ControlledInput
                control={form.control}
                name="capitalLoss"
                label="Capital Loss"
                inputProps={{
                  placeholder: "Enter capital loss...",
                  type: "number",
                  className: "col-span-1",
                }}
              />
              <ControlledInput
                control={form.control}
                name="hoursPerWeek"
                label="Hours Per Week"
                inputProps={{
                  placeholder: "Enter hours per week...",
                  type: "number",
                  className: "col-span-1",
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <ControlledCombobox
                control={form.control}
                selections={EducationOptions}
                name="education"
                label="Education"
              />
              <ControlledCombobox
                control={form.control}
                selections={MaritalStatusOptions}
                name="maritalStatus"
                label="Marital Status"
              />
              <ControlledCombobox
                control={form.control}
                selections={NativeCountryOptions}
                name="nativeCountry"
                label="Native Country"
              />
              <ControlledCombobox
                control={form.control}
                selections={OccupationOptions}
                name="occupation"
                label="Occupation"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <ControlledCombobox
                control={form.control}
                selections={RaceOptions}
                name="race"
                label="Race"
              />
              <ControlledCombobox
                control={form.control}
                selections={RelationshipOptions}
                name="relationship"
                label="Relationship"
              />
              <ControlledCombobox
                control={form.control}
                selections={SexOptions}
                name="sex"
                label="Sex"
              />
              <ControlledCombobox
                control={form.control}
                selections={WorkClassOptions}
                name="workclass"
                label="Work Class"
              />
            </div>
            <Button type="submit" className="w-1/2 mx-auto">
              Check
            </Button>
          </form>
        </Form>
      </div>
      <div className="md:w-1/3 mt-4 md:mt-0 flex items-center justify-center">
        <label className="text-6xl text-center">{`The income of this person is ${
          result === "> 50k"
            ? "> 50,000"
            : result === "<= 50k"
            ? "≤ 50,000"
            : "..."
        } USD/year`}</label>
      </div>
    </div>
  );
}
