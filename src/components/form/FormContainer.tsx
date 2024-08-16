"use client";

// types
import { FormContainerProps, PersonalInfoFormProps } from "@/types/form";
import { STEPS } from "@/types/steps";

// components
import PersonalInformation from "./PersonalInformation";
import PlanSelection from "./PlanSelection";
import AddOns from "./AddOns";
import Summary from "./Summary";
import { useForm } from "@/hooks/useForm";

const FormContainer: React.FC<FormContainerProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  const { setPersonalInfo, setPlan, setAddOns, addOns, plan } = useForm();
  return (
    <section className="w-full m-10 z-10">
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
        <Summary setCurrentStep={setCurrentStep} plan={plan} addOns={addOns} />
      )}
    </section>
  );
};

export default FormContainer;
