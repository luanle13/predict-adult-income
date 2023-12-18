import { ComboboxSelectItem } from "@/components/ui/combobox";

export const WORK_CLASS = [
  "Private",
  "Self-emp-not-inc",
  "Self-emp-inc",
  "Federal-gov",
  "Local-gov",
  "State-gov",
  "Without-pay",
  "Never-worked",
] as const;
export type WorkClassTypes = (typeof WORK_CLASS)[number];
export const WorkClassOptions: ComboboxSelectItem[] = WORK_CLASS.map(
  (item) => ({ value: item, key: item })
);

export const EDUCATION = [
  "Bachelors",
  "Some-college",
  "11th",
  "HS-grad",
  "Prof-school",
  "Assoc-acdm",
  "Assoc-voc",
  "9th",
  "7th-8th",
  "12th",
  "Masters",
  "1st-4th",
  "10th",
  "Doctorate",
  "5th-6th",
  "Preschool",
] as const;
export type EducationTypes = (typeof EDUCATION)[number];
export const EducationOptions: ComboboxSelectItem[] = EDUCATION.map((item) => ({
  value: item,
  key: item,
}));

export const MARITAL_STATUS = [
  "Married-civ-spouse",
  "Divorced",
  "Never-married",
  "Separated",
  "Widowed",
  "Married-spouse-absent",
  "Married-AF-spouse",
] as const;
export type MaritalStatusType = (typeof MARITAL_STATUS)[number];
export const MaritalStatusOptions: ComboboxSelectItem[] = MARITAL_STATUS.map(
  (item) => ({ value: item, key: item })
);

export const OCCUPATION = [
  "Tech-support",
  "Craft-repair",
  "Other-service",
  "Sales",
  "Exec-managerial",
  "Prof-specialty",
  "Handlers-cleaners",
  "Machine-op-inspct",
  "Adm-clerical",
  "Farming-fishing",
  "Transport-moving",
  "Priv-house-serv",
  "Protective-serv",
  "Armed-Forces",
] as const;
export type OccupationType = (typeof OCCUPATION)[number];
export const OccupationOptions: ComboboxSelectItem[] = OCCUPATION.map(
  (item) => ({ value: item, key: item })
);

export const RELATIONSHIP = [
  "Not-in-family",
  "Husband",
  "Wife",
  "Own-child",
  "Unmarried",
  "Other-relative",
] as const;
export type RelationshipType = (typeof RELATIONSHIP)[number];
export const RelationshipOptions: ComboboxSelectItem[] = RELATIONSHIP.map(
  (item) => ({ value: item, key: item })
);

export const NATIVE_COUNTRY = [
  "United-States",
  "Cuba",
  "Jamaica",
  "India",
  "Mexico",
  "South",
  "Puerto-Rico",
  "Honduras",
  "England",
  "Canada",
  "Germany",
  "Iran",
  "Philippines",
  "Italy",
  "Poland",
  "Columbia",
  "Cambodia",
  "Thailand",
  "Ecuador",
  "Laos",
  "Taiwan",
  "Haiti",
  "Portugal",
  "Dominican-Republic",
  "El-Salvador",
  "France",
  "Guatemala",
  "China",
  "Japan",
  "Yugoslavia",
  "Peru",
  "Outlying-US(Guam-USVI-etc)",
  "Scotland",
  "Trinadad&Tobago",
  "Greece",
  "Nicaragua",
  "Vietnam",
  "Hong",
  "Ireland",
  "Hungary",
  "Holand-Netherlands",
] as const;
export type NativeCountryType = (typeof NATIVE_COUNTRY)[number];
export const NativeCountryOptions: ComboboxSelectItem[] = NATIVE_COUNTRY.map(
  (item) => ({ value: item, key: item })
);

export const SEX = ["Male", "Female"] as const;
export type SexType = (typeof SEX)[number];
export const SexOptions: ComboboxSelectItem[] = SEX.map((item) => ({
  value: item,
  key: item,
}));

export const RACE = [
  "White",
  "Black",
  "Asian-Pac-Islander",
  "Amer-Indian-Eskimo",
  "Other",
] as const;
export type RaceType = (typeof RACE)[number];
export const RaceOptions: ComboboxSelectItem[] = RACE.map((item) => ({
  value: item,
  key: item,
}));
