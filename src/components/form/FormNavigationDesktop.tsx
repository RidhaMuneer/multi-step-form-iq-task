// types
import { FormContainerProps } from "@/types/form";

// data
import { steps } from "@/data/steps";

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
