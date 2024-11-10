import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface CallToActionProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onGetStarted, onLearnMore }) => {
  return (
    <section className="flex overflow-hidden flex-col px-16 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-col flex-1 shrink text-black basis-0 min-w-[240px] max-md:max-w-full">
          <span className="self-start text-base font-semibold whitespace-nowrap">Empower</span>
          <h2 className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Unlock Your Potential with Video Communication
          </h2>
        </div>
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <p className="text-lg leading-7 text-black max-md:max-w-full">
            Transform your outreach with our AI-driven video application. Engage prospects like never before and build meaningful connections through personalized video messages. Experience the future of communication and watch your conversions soar.
          </p>
          <div className="flex gap-6 items-center self-start mt-8 text-base text-black">
            <button
              onClick={onGetStarted}
              className="overflow-hidden gap-2 self-stretch px-6 py-3 my-auto border border-black border-solid max-md:px-5"
            >
              Get Started
            </button>
            <button
              onClick={onLearnMore}
              className="flex overflow-hidden gap-2 justify-center items-center self-stretch my-auto"
            >
              <span className="self-stretch my-auto">Learn More</span>
              <AiOutlineArrowRight className="shrink-0 w-6 h-6 my-auto" />
            </button>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://images.unsplash.com/photo-1496664444929-8c75efb9546f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="object-cover mt-20 w-full aspect-[1.78] max-md:mt-10 max-md:max-w-full"
        alt="Video communication platform"
      />
    </section>
  );
};

export default CallToAction;
