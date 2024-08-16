"use client";

// types
import { STEPS } from "@/types/steps";
import { SummaryCardProps } from "@/types/summary";

const SummaryCard: React.FC<
  SummaryCardProps & {
    setCurrentStep: React.Dispatch<React.SetStateAction<STEPS>>;
  }
> = ({ plan, addOns, setCurrentStep }) => {
  return (
    <article className="bg-indigo-50 p-7 rounded-xl w-full flex flex-col gap-5">
      {plan && (
        <div className="flex w-full justify-between items-center">
          <div>
            <h2 className="text-xl text-blue-950 font-bold">{plan.title}</h2>
            <button
              className="font-thin text-blue-950 opacity-60 underline"
              onClick={() => setCurrentStep(STEPS.SECOND)}
            >
              Change
            </button>
          </div>
          <p className="text-xl text-blue-950 font-bold">
            {plan.isMonthly
              ? `${"$" + plan.price}/mo`
              : `${"$" + plan.price * 10}/yr`}
          </p>
        </div>
      )}
      {addOns && plan && (
        <div className="w-full flex flex-col gap-5">
          <div className="border-b-[1px] border-gray-200 w-full" />
          <div className="w-full flex flex-col gap-5">
            {addOns.map((addOn, index) => (
              <div
                key={index}
                className="flex justify-between items-center w-full"
              >
                <p className="font-thin text-blue-950 opacity-60">
                  {addOn.title}
                </p>
                <p className="text-lg text-blue-950 font-bold">
                  {plan.isMonthly
                    ? `${"+$" + addOn.price}/mo`
                    : `${"+$" + addOn.price * 10}/yr`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default SummaryCard;
