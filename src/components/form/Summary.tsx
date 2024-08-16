"use client";

// types
import { STEPS } from "@/types/steps";
import SummaryCard from "../SummaryCard";
import { Plan } from "@/types/plans";
import { AddOnCardProps } from "@/types/addons";
import { useEffect, useState } from "react";

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
            // setCurrentStep(STEPS.FORTH);
          }}
        >
          Confirm
        </button>
      </div>
    </section>
  );
};

export default Summary;
