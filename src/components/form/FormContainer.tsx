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

const FormContainer: React.FC<FormContainerProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoFormProps>();
  return (
    <section className="w-full m-10">
      {currentStep === STEPS.FIRST && (
        <PersonalInformation
          setPersonalInfo={setPersonalInfo}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === STEPS.SECOND && (
        <PlanSelection setCurrentStep={setCurrentStep} />
      )}
      {currentStep === STEPS.THIRD && <AddOns />}
      {currentStep === STEPS.FORTH && <Summary />}
    </section>
  );
};

export default FormContainer;
