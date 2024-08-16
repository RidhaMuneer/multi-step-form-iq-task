// types
import { AddOnCardProps } from "@/types/addons";
import { PersonalInfoFormProps } from "@/types/form";
import { Plan } from "@/types/plans";

// react
import { createContext, ReactNode, useState } from "react";

export const FormContext = createContext<
  | {
      personalInfo: PersonalInfoFormProps | undefined;
      setPersonalInfo: React.Dispatch<
        React.SetStateAction<PersonalInfoFormProps | undefined>
      >;
      plan: Plan | undefined;
      setPlan: React.Dispatch<React.SetStateAction<Plan | undefined>>;
      planClicked: boolean;
      setPlanClicked: React.Dispatch<React.SetStateAction<boolean>>;
      addOns: AddOnCardProps[] | undefined;
      setAddOns: React.Dispatch<React.SetStateAction<AddOnCardProps[]>>;
    }
  | undefined
>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoFormProps>();
  const [plan, setPlan] = useState<Plan>();
  const [planClicked, setPlanClicked] = useState<boolean>(false);
  const [addOns, setAddOns] = useState<AddOnCardProps[]>([]);
  return (
    <FormContext.Provider
      value={{
        personalInfo,
        plan,
        addOns,
        setAddOns,
        setPersonalInfo,
        setPlan,
        planClicked,
        setPlanClicked
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
