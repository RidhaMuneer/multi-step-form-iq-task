"use client";

// react
import { useState } from "react";

// types
import { FormContainerProps, PersonalInfoFormProps } from "@/types/form";
import { STEPS } from "@/types/steps";

// components
import PersonalInformation from "./PersonalInformation";
import PlanSelection from "./PlanSelection";
import AddOns from "./AddOns";
import Summary from "./Summary";
import { Plan } from "@/types/plans";
import { AddOnCardProps } from "@/types/addons";

const FormContainer: React.FC<FormContainerProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoFormProps>();
  const [plan, setPlan] = useState<Plan>();
  const [addOns, setAddOns] = useState<AddOnCardProps[]>([]);
  return (
    <section className="w-full m-10">
      {currentStep === STEPS.FIRST && (
        <PersonalInformation
          setPersonalInfo={setPersonalInfo}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === STEPS.SECOND && (
        <PlanSelection setCurrentStep={setCurrentStep} setPlan={setPlan} />
      )}
      {currentStep === STEPS.THIRD && (
        <AddOns
          setCurrentStep={setCurrentStep}
          setAddOns={setAddOns}
          addOns={addOns}
        />
      )}
      {currentStep === STEPS.FORTH && (
        <Summary setCurrentStep={setCurrentStep} />
      )}
    </section>
  );
};

export default FormContainer;
