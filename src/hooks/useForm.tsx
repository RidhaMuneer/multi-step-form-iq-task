import { FormContext } from "@/context/FormProvider";
import { useContext } from "react";

/**
 * Custom hook that provides access to the `FormContext` context.
 * It allows components to access and manipulate the form state, including personal information,
 * selected plan, add-ons, and related handlers.
 *
 * @throws {Error} Throws an error if the hook is used outside of a `FormProvider` context.
 * 
 * @returns {Object} The current context value from `FormContext`. This includes:
 * - `personalInfo`: The personal information form state.
 * - `setPersonalInfo`: Function to update the personal information form state.
 * - `plan`: The currently selected plan.
 * - `setPlan`: Function to update the selected plan.
 * - `planClicked`: Boolean indicating if a plan was clicked.
 * - `setPlanClicked`: Function to update the `planClicked` state.
 * - `addOns`: Array of selected add-ons.
 * - `setAddOns`: Function to update the array of selected add-ons.
 * - `handleAddOnClick`: Function to add an add-on.
 * - `handleAddOnRemove`: Function to remove an add-on.
 *
 * @example
 * ```jsx
 * import { useForm } from "@/hooks/useForm";
 *
 * const MyComponent = () => {
 *   const { personalInfo, setPersonalInfo, plan, setPlan, addOns, setAddOns } = useForm();
 *   
 *   // Use the form context values and functions here
 * };
 * ```
 */
export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider");
  }

  return context;
};
