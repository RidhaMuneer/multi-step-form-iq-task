// types
import { AddOnCardProps } from "@/types/addons";
import { PersonalInfoFormProps } from "@/types/form";
import { Plan } from "@/types/plans";

// react
import { createContext, ReactNode, useState } from "react";

/**
 * Context for managing form state throughout the application.
 * Provides personal information, selected plan, add-ons, and functions
 * to handle changes to these states. Useful for form steps and summary.
 *
 * @type {React.Context<{
*   personalInfo: PersonalInfoFormProps | undefined;
*   setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfoFormProps | undefined>>;
*   plan: Plan | undefined;
*   setPlan: React.Dispatch<React.SetStateAction<Plan | undefined>>;
*   planClicked: boolean;
*   setPlanClicked: React.Dispatch<React.SetStateAction<boolean>>;
*   addOns: AddOnCardProps[] | undefined;
*   setAddOns: React.Dispatch<React.SetStateAction<AddOnCardProps[]>>;
*   handleAddOnClick: (addOn: AddOnCardProps) => void;
*   handleAddOnRemove: (addOn: AddOnCardProps) => void;
* } | undefined>}
*/

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
      handleAddOnClick: (addOn: AddOnCardProps) => void;
      handleAddOnRemove: (addOn: AddOnCardProps) => void;
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

  const handleAddOnClick = (addOn: AddOnCardProps) => {
    setAddOns((prevAddOns) => {
      const exists = prevAddOns.some((item) => item.title === addOn.title);
      if (exists) {
        return prevAddOns;
      }
      return [...prevAddOns, addOn];
    });
  };

  const handleAddOnRemove = (addOn: AddOnCardProps) => {
    setAddOns((prevAddOns) => {
      return prevAddOns.filter((item) => item.title !== addOn.title);
    });
  };

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
        setPlanClicked,
        handleAddOnClick,
        handleAddOnRemove,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
