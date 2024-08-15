"use client";

// components
import FormNavigationDesktop from "@/components/form/FormNavigationDesktop";
import FormContainer from "@/components/form/FormContainer";

// types
import { STEPS } from "@/types/steps";

// react
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.FIRST);
  return (
    <main className="flex min-h-screen flex-col bg-indigo-50 items-center justify-center">
      <div className="bg-white rounded-xl flex p-3">
        <FormNavigationDesktop
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <FormContainer
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </main>
  );
}
