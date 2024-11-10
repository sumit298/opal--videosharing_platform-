import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Example React icon

const Features: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-16 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full text-black max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <span className="self-start text-base font-semibold whitespace-nowrap">
                Capture
              </span>
              <div className="flex flex-col mt-4 w-full max-md:max-w-full">
                <h2 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Revolutionize Your Video Recording Experience Today
                </h2>
                <p className="mt-6 text-lg leading-7 max-md:max-w-full">
                  Our AI-powered platform simplifies video recording, making it
                  effortless to connect with prospects. Create engaging content
                  that stands out and drives results.
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-8 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-6 items-start py-2 w-full max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
                  <h3 className="text-xl font-bold leading-snug">
                    Smart Technology
                  </h3>
                  <p className="mt-4 text-base leading-6">
                    Leverage AI to enhance your video quality and engagement
                    effortlessly.
                  </p>
                </div>
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
                  <h3 className="text-xl font-bold leading-snug">
                    User-Friendly
                  </h3>
                  <p className="mt-4 text-base leading-6">
                    Easily record, edit, and share videos with just a few
                    clicks.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center self-start mt-8 text-base text-black">
            <button className="overflow-hidden gap-2 self-stretch px-6 py-3 my-auto border border-black border-solid max-md:px-5 hover:bg-black hover:text-white transition">
              Learn More
            </button>
            <button className="flex overflow-hidden gap-2 justify-center items-center self-stretch my-auto">
              <span className="self-stretch my-auto">Sign Up</span>
              <FaArrowRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg"
          className="object-cover flex-1 shrink self-stretch my-auto w-full aspect-[0.96] basis-0 min-w-[240px] max-md:max-w-full rounded-md shadow-lg"
          alt="AI-powered video recording feature"
        />
      </div>
    </section>
  );
};

export default Features;
