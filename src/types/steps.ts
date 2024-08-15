import { PersonalInfoFormProps } from "./form";

export type Step = {
  title: string;
  Component: () => JSX.Element;
};

export type PersonalInformationProps = {
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfoFormProps | undefined>>;
};
