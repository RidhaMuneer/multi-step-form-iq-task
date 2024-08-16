// nextjs
import Image from "next/image";

/**
 * `ThankYou` component renders a thank you message to the user after they have confirmed their subscription.
 * It includes a thank you icon, a heading, and a message with contact information for support.
 *
 * @component
 * @returns {JSX.Element} The rendered thank you message section.
 *
 * @example
 * ```jsx
 * <ThankYou />
 * ```
 */

const ThankYou = () => {
  return (
    <section className="h-full flex flex-col w-full justify-center items-center gap-5">
      <Image
        src={"/images/icon-thank-you.svg"}
        alt="thank you"
        width={60}
        height={60}
      />
      <h1 className="text-2xl text-blue-950 font-bold">Thank you!</h1>
      <p className="font-thin text-blue-950 opacity-60 text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
};

export default ThankYou;
