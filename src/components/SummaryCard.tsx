"use client";

// types
import { STEPS } from "@/types/steps";
import { SummaryCardProps } from "@/types/summary";

/**
 * SummaryCard component displays a summary of the selected plan and add-ons.
 * It shows the plan's title, price, and allows the user to change the plan
 * by navigating back to the previous step. Additionally, it lists all selected
 * add-ons with their respective prices.
 *
 * @component
 * @param {Object} plan - The selected plan details.
 * @param {string} plan.title - The title or name of the selected plan.
 * @param {number} plan.price - The price of the selected plan.
 * @param {boolean} plan.isMonthly - Indicates if the plan is monthly (`true`) or yearly (`false`).
 * @param {Object[]} addOns - The list of selected add-ons.
 * @param {string} addOns[].title - The title of the add-on.
 * @param {number} addOns[].price - The price of the add-on.
 * @param {React.Dispatch<React.SetStateAction<STEPS>>} setCurrentStep - Function to set the current step in the process.
 * @returns {JSX.Element} The rendered SummaryCard component.
 *
 * @example
 * ```jsx
 * <SummaryCard
 *   plan={{ title: "Basic Plan", price: 9.99, isMonthly: true }}
 *   addOns={[
 *     { title: "Extra Storage", price: 2.99 },
 *     { title: "Custom Domain", price: 1.99 }
 *   ]}
 *   setCurrentStep={setCurrentStep}
 * />
 * ```
 */

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
