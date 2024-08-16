import { steps } from "@/data/steps";
import { FormContainerProps } from "@/types/form";

/**
 * FormNavigationMobile component provides a navigation interface for selecting
 * different steps in a form. It displays step numbers in a mobile-friendly layout
 * and highlights the currently active step. Users can click on a step number to
 * navigate to that step.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {number} props.currentStep - The current active step number.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setCurrentStep - Function to update the current step.
 * @returns {JSX.Element} The rendered FormNavigationMobile component.
 *
 * @example
 * ```jsx
 * <FormNavigationMobile
 *   currentStep={1}
 *   setCurrentStep={(step) => console.log(step)}
 * />
 * ```
 */

const FormNavigationMobile: React.FC<FormContainerProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  return (
    <nav className="flex justify-center items-center gap-5 w-full py-10 z-10">
      {steps.map((step, index) => (
        <div
          className="flex justify-center items-center gap-4 cursor-pointer"
          key={index}
          onClick={() => setCurrentStep(step.stepNum)}
        >
          <p
            className={`border rounded-full border-white min-w-10 min-h-10 flex justify-center items-center ${
              currentStep === step.stepNum && "border-0"
            }`}
            style={{
              color: currentStep === step.stepNum ? "black" : "white",
              backgroundColor:
                currentStep === step.stepNum ? "#9ecfde" : "transparent",
            }}
          >
            {step.stepNum}
          </p>
        </div>
      ))}
    </nav>
  );
};

export default FormNavigationMobile;
