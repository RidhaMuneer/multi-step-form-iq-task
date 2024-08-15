// types
import { PersonalInfoFormProps } from "@/types/form";
import { PersonalInformationProps, STEPS } from "@/types/steps";

// react hook form
import { SubmitHandler, useForm } from "react-hook-form";

/**
 * PersonalInformation component for collecting user details.
 *
 * This component provides a form for users to input their personal information, including
 * their name, email address, and phone number. It uses React Hook Form for handling form
 * state and validation. Upon submission, the component updates the user information and
 * navigates to the next step in the process.
 *
 * @component
 * @param {PersonalInformationProps} props - The properties passed to the component.
 * @param {function} props.setPersonalInfo - Function to update the state with personal information.
 * @param {React.Dispatch<React.SetStateAction<STEPS>>} props.setCurrentStep - Function to update the current step of the form.
 *
 * @example
 * ```tsx
 * import { useState } from "react";
 * import PersonalInformation from "@/components/PersonalInformation";
 * import { STEPS } from "@/types/steps";
 *
 * const MyComponent = () => {
 *   const [personalInfo, setPersonalInfo] = useState<PersonalInfoFormProps>();
 *   const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.FIRST);
 *
 *   return (
 *     <PersonalInformation
 *       setPersonalInfo={setPersonalInfo}
 *       setCurrentStep={setCurrentStep}
 *     />
 *   );
 * };
 * ```
 */

const PersonalInformation: React.FC<
  PersonalInformationProps & {
    setCurrentStep: React.Dispatch<React.SetStateAction<STEPS>>;
  }
> = ({ setPersonalInfo, setCurrentStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormProps>();

  const onSubmit: SubmitHandler<PersonalInfoFormProps> = (
    data: PersonalInfoFormProps,
  ) => {
    setPersonalInfo(data);
    setCurrentStep(STEPS.SECOND);
  };

  return (
    <section className="flex flex-col jusitfy-center items-center gap-14 w-full">
      <div className="flex flex-col items-start gap-1 w-full">
        <h1 className="text-2xl text-blue-950 font-bold">
          Personal Information
        </h1>
        <p className="font-thin text-blue-950 opacity-60">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center w-full gap-4"
      >
        <div className="flex flex-col justify-start gap-1 w-full">
          <div className="flex w-full justify-between items-center">
            <label className="text-blue-950 font-bold">Name</label>
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <input
            className={`border rounded px-2 py-2 font-bold ${
              errors.phone ? "border-rose-500" : "border-gray-300"
            }`}
            type="text"
            autoComplete="name"
            placeholder="e.g. John Dow"
            {...register("name", { required: "This field is required" })}
          />
        </div>
        <div className="flex flex-col justify-start gap-1 w-full">
          <div className="flex w-full justify-between items-center">
            <label className="text-blue-950 font-bold">Email Address</label>
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <input
            type="email"
            placeholder="e.g. johndow@gmail.com"
            autoComplete="email"
            className={`border rounded px-2 py-2 font-bold ${
              errors.phone ? "border-rose-500" : "border-gray-300"
            }`}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
        </div>
        <div className="flex flex-col justify-start gap-1 w-full">
          <div className="flex w-full justify-between items-center">
            <label className="text-blue-950 font-bold">Phone Number</label>
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
            )}
          </div>
          <input
            className={`border rounded px-2 py-2 font-bold ${
              errors.phone ? "border-rose-500" : "border-gray-300"
            }`}
            type="tel"
            placeholder="+1 (555) 555-5555"
            autoComplete="tel"
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value: /^\+?[1-9]\d{1,14}$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-950 text-white px-4 py-3 rounded self-end hover:bg-blue-900"
        >
          Next Step
        </button>
      </form>
    </section>
  );
};

export default PersonalInformation;
