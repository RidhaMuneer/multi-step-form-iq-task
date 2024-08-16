"use client"

// types
import { STEPS } from "@/types/steps";

const Summary: React.FC<{
  setCurrentStep: React.Dispatch<React.SetStateAction<STEPS>>;
}> = ({ setCurrentStep }) => {
  return (
    <section className="flex flex-col gap-10 w-full">
      <div className="flex flex-col items-start gap-1 w-full">
        <h1 className="text-2xl text-blue-950 font-bold">Finishing up</h1>
        <p className="font-thin text-blue-950 opacity-60">
          Double-check everything looks OK before confirming.
        </p>
      </div>
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
