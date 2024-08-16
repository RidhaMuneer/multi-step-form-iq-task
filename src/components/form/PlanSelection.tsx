"use client";
// data
import { plans } from "@/data/plans";

// components
import PlanCard from "../card/PlanCard";
import Toggle from "../Toggle";

// react
import { useState } from "react";

// types
import { STEPS } from "@/types/steps";

/**
 * PlanSelection component allows users to select a billing plan.
 *
 * This component displays a selection of billing plans with the option to toggle between
 * monthly and yearly billing. It uses the `PlanCard` component to display each plan and
 * the `Toggle` component to switch between billing periods. The component also provides
 * navigation to move to the next or previous step in the multi-step form.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {React.Dispatch<React.SetStateAction<STEPS>>} props.setCurrentStep - Function to update the current step of the form.
 *
 * @example
 * ```tsx
 * import { useState } from "react";
 * import PlanSelection from "@/components/PlanSelection";
 * import { STEPS } from "@/types/steps";
 *
 * const MyComponent = () => {
 *   const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.SECOND);
 *
 *   return (
 *     <PlanSelection setCurrentStep={setCurrentStep} />
 *   );
 * };
 * ```
 */

const PlanSelection: React.FC<{
  setCurrentStep: React.Dispatch<React.SetStateAction<STEPS>>;
}> = ({ setCurrentStep }) => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  return (
    <section className="flex flex-col gap-10 w-full">
      <div className="flex flex-col items-start gap-1 w-full">
        <h1 className="text-2xl text-blue-950 font-bold">Select your plan</h1>
        <p className="font-thin text-blue-950 opacity-60">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-5 items-center w-full">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            icon={plan.icon}
            title={plan.title}
            price={plan.price}
            isMonthly={isMonthly}
          />
        ))}
      </div>
      <Toggle setIsMonthly={setIsMonthly} isMonthly={isMonthly} />
      <div className="flex justify-between w-full items-center">
        <button
          className="opacity-60 hover:opacity-100 text-blue-950 pt-2"
          onClick={() => {
            setCurrentStep(STEPS.FIRST);
          }}
        >
          Go Back
        </button>
        <button
          className="mt-4 bg-blue-950 text-white px-4 py-3 rounded self-end hover:bg-blue-900"
          onClick={() => {
            setCurrentStep(STEPS.THIRD);
          }}
        >
          Next Step
        </button>
      </div>
    </section>
  );
};

export default PlanSelection;
