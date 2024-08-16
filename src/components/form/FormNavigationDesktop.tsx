// types
import { FormContainerProps } from "@/types/form";

// data
import { steps } from "@/data/steps";

/**
 * FormNavigationDesktop component provides a sidebar navigation for selecting
 * different steps in a form on larger screens. It displays each step's number and title
 * with an indicator for the current active step. Users can click on a step to navigate to that step.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {number} props.currentStep - The current active step number.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setCurrentStep - Function to update the current step.
 * @returns {JSX.Element} The rendered FormNavigationDesktop component.
 *
 * @example
 * ```jsx
 * <FormNavigationDesktop
 *   currentStep={1}
 *   setCurrentStep={(step) => console.log(step)}
 * />
 * ```
 */

const FormNavigationDesktop: React.FC<FormContainerProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  return (
    <nav
      className="flex flex-col justify-start pt-10 items-start gap-4 rounded-xl min-h-[650px] px-10 w-[50%]"
      style={{
        backgroundImage: "url('/images/bg-sidebar-desktop.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
          <div className="flex flex-col items-start justify-center text-white pt-2">
            <p className="font-light opacity-80">STEP {step.stepNum}</p>
            <h2 className="font-black">{step.title}</h2>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default FormNavigationDesktop;
