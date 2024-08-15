"use client";

// types
import { PlanProps } from "@/types/plans";

// nextjs
import Image from "next/image";

/**
 * PlanCard component displays a plan option with an icon, title, and price.
 *
 * This component is used to represent different pricing plans or subscription options.
 * It is responsive and adjusts the layout based on screen size.
 *
 * @component
 * @param {PlanProps} props - The properties object for the component.
 * @param {string} props.icon - The source URL for the icon image.
 * @param {string} props.title - The title of the plan.
 * @param {number} props.price - The price of the plan.
 * @param {boolean} props.isMonthly - The montly flag.
 *
 * @example
 * ```tsx
 * import PlanCard from "@/components/PlanCard";
 *
 * const MyComponent = () => {
 *   return (
 *     <PlanCard
 *       icon="/path/to/icon.png"
 *       title="Basic Plan"
 *       price="$9.99/month"
 *       isMonthly={isMonthly}
 *     />
 *   );
 * };
 * ```
 */

const PlanCard: React.FC<PlanProps> = ({ icon, title, price, isMonthly }) => {
  return (
    <article className="flex flex-row md:flex-col gap-14 justify-start items-start border rounded-xl p-5 w-full md:w-[30%]">
      <Image src={icon} alt={title} width={50} height={50} />
      <div className="flex flex-col justify-center items-start gap-1">
        <h2 className="font-bold text-blue-950 text-xl">{title}</h2>
        <p className="font-thin text-sm opacity-50 text-blue-950">${price}/{isMonthly ? "mo" : "yr"}</p>
        {!isMonthly && <h3 className="font-bold text-md text-blue-950">2 Months Free</h3>}
      </div>
    </article>
  );
};

export default PlanCard;
