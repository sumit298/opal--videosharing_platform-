import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Testimonial: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-center max-w-full w-[768px]">
        <div className="flex overflow-hidden gap-1 items-start">
          <AiFillStar className="w-8 h-8 text-yellow-500" />
          <AiFillStar className="w-8 h-8 text-yellow-500" />
          <AiFillStar className="w-8 h-8 text-yellow-500" />
          <AiFillStar className="w-8 h-8 text-yellow-500" />
          <AiOutlineStar className="w-8 h-8 text-yellow-500" />
        </div>
        <blockquote className="self-stretch mt-8 text-2xl font-bold leading-9 text-center text-black max-md:max-w-full">
          "Using this platform has transformed the way I connect with clients. The ease of sharing personalized videos has significantly boosted my sales!"
        </blockquote>
        <div className="flex gap-5 items-center mt-8 text-base text-black">
          <img
            loading="lazy"
            src="https://via.placeholder.com/150"
            className="object-cover shrink-0 self-stretch my-auto w-14 rounded-full aspect-square"
            alt="Jane Doe"
          />
          <div className="flex flex-col self-stretch my-auto">
            <div className="font-semibold">Jane Doe</div>
            <div>Sales Manager, TechCorp</div>
          </div>
          <div className="shrink-0 self-stretch my-auto w-0 border border-black border-solid h-[61px]" />
          <img
            loading="lazy"
            src="https://via.placeholder.com/120x60"
            className="object-contain shrink-0 self-stretch my-auto aspect-[2.5] w-[120px]"
            alt="TechCorp logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
