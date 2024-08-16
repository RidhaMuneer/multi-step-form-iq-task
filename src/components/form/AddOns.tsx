"use client";

// data
import { addons } from "@/data/addons";

// types
import { STEPS } from "@/types/steps";
import { AddOnCardProps } from "@/types/addons";

// components
import AddOnCard from "../AddOnCard";

/**
 * AddOns component allows the user to pick additional options to enhance their gaming experience.
 * It renders a list of available add-ons and provides navigation to move back to the previous step or proceed to the next one.
 *
 * @component
 * @param {React.Dispatch<React.SetStateAction<STEPS>>} setCurrentStep - Function to update the current step of the form.
 * @param {React.Dispatch<React.SetStateAction<AddOnCardProps[]>>} setAddOns - Function to update the list of selected add-ons.
 * @param {AddOnCardProps[]} addOns - The current array of selected add-ons.
 * @returns {JSX.Element} The rendered AddOns component.
 *
 * @example
 * ```jsx
 * const [addOns, setAddOns] = useState<AddOnCardProps[]>([]);
 * const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.THIRD);
 *
 * <AddOns
 *   setCurrentStep={setCurrentStep}
 *   setAddOns={setAddOns}
 *   addOns={addOns}
 * />
 * ```
 */

const AddOns: React.FC<{
  setCurrentStep: React.Dispatch<React.SetStateAction<STEPS>>;
  setAddOns: React.Dispatch<React.SetStateAction<AddOnCardProps[]>>;
  addOns: AddOnCardProps[];
}> = ({ setCurrentStep, setAddOns, addOns }) => {
  return (
    <section className="flex flex-col gap-10 w-full">
      <div className="flex flex-col items-start gap-1 w-full">
        <h1 className="text-2xl text-blue-950 font-bold">Pick add-ons</h1>
        <p className="font-thin text-blue-950 opacity-60">
          Add-ons help to enhance your gaming experience.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-5">
        {addons.map((addon, index) => (
          <AddOnCard
            key={index}
            title={addon.title}
            subtitle={addon.subtitle}
            price={addon.price}
            setAddOns={setAddOns}
            addOns={addOns}
          />
        ))}
      </div>
      <div className="flex justify-between w-full items-center">
        <button
          className="opacity-60 hover:opacity-100 text-blue-950 pt-2"
          onClick={() => {
            setCurrentStep(STEPS.SECOND);
          }}
        >
          Go Back
        </button>
        <button
          className="mt-4 bg-blue-950 text-white px-4 py-3 rounded self-end hover:bg-blue-900"
          onClick={() => {
            setCurrentStep(STEPS.FORTH);
          }}
        >
          Next Step
        </button>
      </div>
    </section>
  );
};

export default AddOns;
