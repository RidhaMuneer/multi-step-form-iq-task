"use client"

import PersonalInformation from "@/components/form/PersonalInformation";
import { PersonalInfoFormProps } from "@/types/form";
import { useState } from "react";

export default function Home() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoFormProps>();
  console.log(personalInfo);
  return (
    <main className="flex min-h-screen flex-col bg-indigo-50 items-center justify-center">
      <PersonalInformation setPersonalInfo={setPersonalInfo}/>
    </main>
  );
}
