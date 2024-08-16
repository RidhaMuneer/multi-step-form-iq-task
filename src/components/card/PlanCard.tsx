"use client";

// hooks
import { useForm } from "@/hooks/useForm";

// types
import { PlanProps } from "@/types/plans";

// nextjs
import Image from "next/image";

/**
 * PlanCard component represents an individual subscription plan option.
 * It displays the plan's icon, title, price, and additional details.
 * Users can select a plan by clicking on the card, which will trigger
 * the `setPlan` function to update the selected plan and highlight
 * the selected card with a background color.
 *
 * @component
 * @param {string} icon - The path to the image or icon of the plan.
 * @param {string} title - The title or name of the plan.
 * @param {number} price - The price of the plan.
 * @param {boolean} isMonthly - Indicates whether the plan is monthly (`true`) or yearly (`false`).
 * @returns {JSX.Element} The rendered PlanCard component.
 *
 * @example
 * ```jsx
 * <PlanCard
 *   icon="/images/plan-icon.svg"
 *   title="Basic Plan"
 *   price={9.99}
 *   isMonthly={true}
 * />
 * ```
 */

const PlanCard: React.FC<PlanProps> = ({ icon, title, price, isMonthly }) => {
  const { setPlan, setPlanClicked, plan } = useForm();
  return (
    <article
      className={`flex flex-row md:flex-col gap-14 justify-start items-start border rounded-xl p-5 w-full md:w-[30%] hover:border-indigo-600 cursor-pointer ${
        plan?.title === title && "bg-indigo-100"
      }`}
      onClick={() => {
        setPlanClicked(true);
        setPlan({ title, price, isMonthly });
      }}
    >
      <Image src={icon} alt={title} width={50} height={50} />
      <div className="flex flex-col justify-center items-start gap-1">
        <h2 className="font-bold text-blue-950 text-xl">{title}</h2>
        <p className="font-thin text-sm opacity-50 text-blue-950">
          {isMonthly
            ? `${"$" + price}/${isMonthly ? "mo" : "yr"}`
            : `${"$" + price * 10}/${isMonthly ? "mo" : "yr"}`}
        </p>
        {!isMonthly && (
          <h3 className="font-bold text-md text-blue-950">2 Months Free</h3>
        )}
      </div>
    </article>
  );
};

export default PlanCard;
