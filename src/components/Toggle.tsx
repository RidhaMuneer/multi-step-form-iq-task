"use client";

// types
import { ToggleProps } from "@/types/toggle";

/**
 * Toggle component for switching between Monthly and Yearly plans.
 *
 * This component displays a toggle switch that allows the user to switch between
 * monthly and yearly plans. The appearance of the toggle and labels changes based
 * on the current state.
 *
 * @component
 * @param {ToggleProps} props - The properties object for the component.
 * @param {boolean} props.isMonthly - The current state of the toggle, true for Monthly, false for Yearly.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setIsMonthly - Function to toggle the state between Monthly and Yearly.
 *
 * @example
 * ```tsx
 * import Toggle from "@/components/Toggle";
 *
 * const MyComponent = () => {
 *   const [isMonthly, setIsMonthly] = useState(true);
 *
 *   return (
 *     <Toggle isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
 *   );
 * };
 * ```
 */

const Toggle: React.FC<ToggleProps> = ({setIsMonthly, isMonthly}) => {
  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };
  return (
    <div className="flex items-center justify-center bg-indigo-50 rounded w-full py-4 space-x-2">
      <span
        className={isMonthly ? "text-blue-950" : "text-blue-950 opacity-50"}
      >
        Monthly
      </span>
      <div
        onClick={handleToggle}
        className={`relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
          isMonthly ? "bg-blue-950" : "bg-blue-950"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
            isMonthly ? "" : "translate-x-6"
          }`}
        />
      </div>
      <span
        className={!isMonthly ? "text-blue-950" : "text-blue-950 opacity-50"}
      >
        Yearly
      </span>
    </div>
  );
};

export default Toggle;
