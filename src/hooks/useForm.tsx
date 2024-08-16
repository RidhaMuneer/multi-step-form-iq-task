import { FormContext } from "@/context/FormProvider";
import { useContext } from "react";

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
