"use client";

import { useForm } from "@/hooks/useForm";
// types
import { PlanProps } from "@/types/plans";

// nextjs
import Image from "next/image";

const PlanCard: React.FC<PlanProps> = ({ icon, title, price, isMonthly }) => {
  const { setPlan, setPlanClicked, planClicked, plan } = useForm();
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
