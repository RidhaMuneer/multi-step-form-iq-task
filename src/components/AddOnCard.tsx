"use client";

import { useForm } from "@/hooks/useForm";
// types
import { AddOnCardProps } from "@/types/addons";

// nextjs
import Image from "next/image";

// react
import { useState } from "react";

/**
 * AddOnCard component represents an individual add-on option in a list of selectable add-ons.
 * The component displays the title, subtitle, and price of the add-on and allows the user
 * to toggle the selection of the add-on. When selected, it adds the add-on to the
 * `addOns` state array, and removes it when deselected.
 *
 * @component
 * @param {string} title - The title of the add-on.
 * @param {string} subtitle - The subtitle or description of the add-on.
 * @param {number} price - The price of the add-on.
 * @param {AddOnCardProps[]} addOns - The current array of selected add-ons.
 * @param {React.Dispatch<React.SetStateAction<AddOnCardProps[]>>} setAddOns - Function to update the selected add-ons.
 * @returns {JSX.Element} The rendered AddOnCard component.
 *
 * @example
 * ```jsx
 * const [addOns, setAddOns] = useState<AddOnCardProps[]>([]);
 *
 * <AddOnCard
 *   title="Extra Storage"
 *   subtitle="2 TB of cloud storage"
 *   price={9.99}
 *   addOns={addOns}
 *   setAddOns={setAddOns}
 * />
 * ```
 */

const AddOnCard: React.FC<AddOnCardProps> = ({ title, subtitle, price }) => {
  const { handleAddOnClick, handleAddOnRemove, addOns } = useForm();
  const [clicked, setClicked] = useState<boolean>(() => {
    return addOns ? addOns.some((addOn) => addOn.title === title) : false;
  });

  return (
    <article
      className={`flex w-full justify-between items-center border rounded-xl cursor-pointer border-gray-200 p-5 hover:border-indigo-700 ${
        clicked && "border-indigo-700 bg-indigo-50"
      }`}
      onClick={() => {
        setClicked((prev) => !prev);
        !clicked
          ? handleAddOnClick({ title, subtitle, price })
          : handleAddOnRemove({ title, subtitle, price });
      }}
    >
      <div className="flex justify-center items-center gap-5">
        {clicked ? (
          <Image
            src={"/images/icon-checkmark.svg"}
            alt={"checkmark"}
            width={20}
            height={30}
            className="bg-indigo-700 rounded p-1 min-w-5 min-h-5"
          />
        ) : (
          <div className="min-w-5 min-h-5 border border-gray-500 rounded" />
        )}
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-xl text-blue-950 font-bold">{title}</h2>
          <p className="font-thin text-blue-950 opacity-60">{subtitle}</p>
        </div>
      </div>
      <p className="text-indigo-700">+${price}/mo</p>
    </article>
  );
};

export default AddOnCard;
