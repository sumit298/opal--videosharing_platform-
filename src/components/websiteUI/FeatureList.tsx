import React from "react";
import {
  AiOutlineLink,
  AiOutlineBarChart,
  AiOutlineAppstoreAdd,
  AiOutlineArrowRight,
} from "react-icons/ai";

const FeatureList: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col px-16 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <h2 className="text-4xl font-bold leading-10 text-black max-md:max-w-full">
        Discover the powerful features that enhance your video sharing
        experience.
      </h2>
      <div className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center items-start w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <div className="flex flex-col w-full text-black">
              <AiOutlineLink className="text-4xl" />
              <h3 className="mt-6 text-2xl font-bold leading-9">
                Unlock seamless integration with your favorite tools and
                platforms effortlessly.
              </h3>
              <p className="mt-6 text-base leading-6">
                Our application allows you to connect with existing software for
                a streamlined workflow.
              </p>
            </div>
            <div className="flex flex-col items-start mt-8 w-full text-base text-black">
              <button className="flex overflow-hidden gap-2 justify-center items-center">
                <span className="self-stretch my-auto">Learn More</span>
                <AiOutlineArrowRight className="shrink-0 w-6 h-6 my-auto" />
              </button>
            </div>
          </div>
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <div className="flex flex-col w-full text-black">
              <AiOutlineBarChart className="text-4xl" />
              <h3 className="mt-6 text-2xl font-bold leading-9">
                Gain insights with user analytics to optimize your video
                engagement strategies.
              </h3>
              <p className="mt-6 text-base leading-6">
                Track viewer interactions and adjust your approach for maximum
                impact.
              </p>
            </div>
            <div className="flex flex-col items-start mt-8 w-full text-base text-black">
              <button className="flex overflow-hidden gap-2 justify-center items-center">
                <span className="self-stretch my-auto">Sign Up</span>
                <AiOutlineArrowRight className="shrink-0 w-6 h-6 my-auto" />
              </button>
            </div>
          </div>
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <div className="flex flex-col w-full text-black">
              <AiOutlineAppstoreAdd className="text-4xl" />
              <h3 className="mt-6 text-2xl font-bold leading-9">
                Personalize your experience with extensive customization options
                tailored to your needs.
              </h3>
              <p className="mt-6 text-base leading-6">
                Create a unique video sharing environment that reflects your
                brand identity.
              </p>
            </div>
            <div className="flex flex-col items-start mt-8 w-full text-base text-black whitespace-nowrap">
              <button className="flex overflow-hidden gap-2 justify-center items-center">
                <span className="self-stretch my-auto">Explore</span>
                <AiOutlineArrowRight className="shrink-0 w-6 h-6 my-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
