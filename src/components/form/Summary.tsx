"use client";

// types
import { STEPS } from "@/types/steps";
import { Plan } from "@/types/plans";
import { AddOnCardProps } from "@/types/addons";

// component
import SummaryCard from "../card/SummaryCard";

// react
import { useEffect, useState } from "react";

/**
 * Summary component displays the final summary of the user's selections including the selected plan
 * and add-ons. It calculates the total cost based on the selected plan and add-ons, and provides
 * buttons for navigating to the previous step or confirming the selection.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Plan | undefined} props.plan - The selected plan object or undefined if no plan is selected.
 * @param {AddOnCardProps[] | undefined} props.addOns - The array of selected add-ons or undefined if no add-ons are selected.
 * @param {React.Dispatch<React.SetStateAction<STEPS>>} props.setCurrentStep - Function to update the current step.
 * @returns {JSX.Element} The rendered Summary component.
 *
 * @example
 * ```jsx
 * <Summary
 *   plan={selectedPlan}
 *   addOns={selectedAddOns}
 *   setCurrentStep={setStep}
 * />
 * ```
 */

const Summary: React.FC<{
  plan: Plan | undefined;
  addOns: AddOnCardProps[] | undefined;
  setCurrentStep: React.Dispatch<React.SetStateAction<STEPS>>;
}> = ({ setCurrentStep, plan, addOns }) => {
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    addOns &&
      addOns.map((addOn) => {
        setTotal((prev) => prev + addOn.price);
      });
  }, [addOns]);
  return (
    <section className="flex flex-col gap-10 w-full">
      <div className="flex flex-col items-start gap-1 w-full">
        <h1 className="text-2xl text-blue-950 font-bold">Finishing up</h1>
        <p className="font-thin text-blue-950 opacity-60">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <SummaryCard
        plan={plan}
        addOns={addOns}
        setCurrentStep={setCurrentStep}
      />
      {plan && (
        <div className="flex w-full justify-between items-center px-5">
          <p className="font-thin text-blue-950 opacity-60">
            Total (per {plan.isMonthly ? "month" : "year"})
          </p>
          <p className="text-indigo-600 text-lg">
            ${plan.price + total}/{plan.isMonthly ? "mo" : "yr"}
          </p>
        </div>
      )}
      <div className="flex justify-between w-full items-center">
        <button
          className="opacity-60 hover:opacity-100 text-blue-950 pt-2"
          onClick={() => {
            setCurrentStep(STEPS.THIRD);
          }}
        >
          Go Back
        </button>
        <button
          className="mt-4 bg-indigo-600 text-white px-4 py-3 rounded self-end hover:bg-indigo-500"
          onClick={() => {
            setCurrentStep(STEPS.DONE);
          }}
        >
          Confirm
        </button>
      </div>
    </section>
  );
};

export default Summary;
