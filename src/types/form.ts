import { STEPS } from "./steps";

export type PersonalInfoFormProps = {
  name: string;
  email: string;
  phone: number;
};

export type FormContainerProps = {
  currentStep: STEPS;
  setCurrentStep: React.Dispatch<React.SetStateAction<STEPS>>;
};
