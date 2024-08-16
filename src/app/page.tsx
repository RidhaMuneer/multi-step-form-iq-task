"use client";

// components
import FormNavigationDesktop from "@/components/navigation/FormNavigationDesktop";
import FormContainer from "@/components/form/FormContainer";
import FormNavigationMobile from "@/components/navigation/FormNavigationMobile";

// types
import { STEPS } from "@/types/steps";

// react
import { useState } from "react";

// contexts
import { FormProvider } from "@/context/FormProvider";

// hooks
import useScreenWidthMatch from "@/hooks/useScreenWidth";


/**
 * Home component serves as the main entry point of the application. It manages the current step
 * of the form and renders the appropriate form navigation and form container based on the screen width.
 * It also provides context for form data using the `FormProvider` and adjusts the layout for mobile
 * and desktop views.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component.
 *
 */

export default function Home() {
  const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.FIRST);
  const isMd = useScreenWidthMatch(768);
  return (
    <FormProvider>
      <main
        className={`flex min-h-screen flex-col bg-indigo-50 items-center w-full ${
          isMd && "justify-center"
        }`}
      >
        {!isMd && (
          <div
            className="absolute top-0 left-0 right-0 w-screen h-[200px]"
            style={{
              backgroundImage: "url('/images/bg-sidebar-mobile.svg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
        )}
        {!isMd && (
          <FormNavigationMobile
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        )}
        <div className={`bg-white rounded-xl flex p-3 w-[80%] lg:w-[60%] z-10`}>
          {isMd && (
            <FormNavigationDesktop
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
          <FormContainer
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </div>
      </main>
    </FormProvider>
  );
}
