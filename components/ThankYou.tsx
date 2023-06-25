import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const ThankYou = () => {
  return (
    <>
      <div className="bg-neutral-800 h-96 flex flex-col justify-center items-center gap-8 p-8">
        <h1 className="text-4xl font-ApercuBold text-white">Thank You!</h1>
        <p className="text-2xl font-ApercuLight text-white">
          We hope you enjoyed the experience
        </p>
        <a
          href="https://github.com/xyspg/UnderTheDigitalVeil"
          target="_blank"
          className="bg-white text-black text-xl font-ApercuLight cursor-pointer px-4 py-2 rounded-md"
        >
          <button
            data-umami-event="GitHub"
            className="inline-flex flex-row gap-2 items-center"
          >
            <GitHubLogoIcon width={20} height={20} />
            View on GitHub
          </button>
        </a>
      </div>
    </>
  );
};

export default ThankYou;
