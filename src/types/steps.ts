import { PersonalInfoFormProps } from "./form";

export type Step = {
  title: string;
  Component: () => JSX.Element;
};

export type PersonalInformationProps = {
  setPersonalInfo: React.Dispatch<
    React.SetStateAction<PersonalInfoFormProps | undefined>
  >;
};

export enum STEPS {
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
  FORTH = 4,
  DONE = 5
}