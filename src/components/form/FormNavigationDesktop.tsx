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
      className="flex flex-col justify-start pt-10 items-start gap-4 rounded-xl min-h-[600px] px-10 w-[50%]"
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
            className={`border rounded-full border-white text-white min-w-10 min-h-10 flex justify-center items-center ${
              currentStep === step.stepNum && "bg-cyan-100 text-black border-0"
            }`}
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
