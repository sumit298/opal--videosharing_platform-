import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const AIEnhancement: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-16 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
        <img
          loading="lazy"
          src="https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg"
          className="object-cover flex-1 shrink self-stretch my-auto w-full aspect-[0.96] basis-0 min-w-[240px] max-md:max-w-full"
          alt="AI-enhanced video quality"
        />
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full text-black max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <span className="self-start text-base font-semibold whitespace-nowrap">Elevate</span>
              <div className="flex flex-col mt-4 w-full max-md:max-w-full">
                <h2 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Transform Your Videos with AI Technology
                </h2>
                <p className="mt-6 text-lg leading-7 max-md:max-w-full">
                  Our AI features automatically enhance video quality, ensuring your content stands out. Experience crystal-clear visuals and superior audio that captivate your audience.
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-8 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-6 items-start py-2 w-full max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
                  <h3 className="text-5xl font-bold leading-tight max-md:text-4xl">Boost</h3>
                  <p className="mt-2 text-base leading-6">
                    Achieve professional-grade videos effortlessly.
                  </p>
                </div>
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
                  <h3 className="text-5xl font-bold leading-tight max-md:text-4xl">Enhance</h3>
                  <p className="mt-2 text-base">
                    Make every video a visual masterpiece.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center self-start mt-8 text-base text-black">
            <button className="overflow-hidden gap-2 self-stretch px-6 py-3 my-auto border border-black border-solid max-md:px-5">
              Learn More
            </button>
            <button className="flex overflow-hidden gap-2 justify-center items-center self-stretch my-auto">
              <span className="self-stretch my-auto">Sign Up</span>
              <AiOutlineArrowRight className="shrink-0 w-6 h-6 my-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEnhancement;
