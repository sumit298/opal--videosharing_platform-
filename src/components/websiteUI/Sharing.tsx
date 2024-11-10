import React from 'react';

const Sharing: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-16 py-28 w-full text-black bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h2 className="text-4xl font-bold leading-10 max-md:max-w-full">
              Effortlessly Share Engaging Videos with Your Prospects Using Our Innovative Platform
            </h2>
            <p className="mt-6 text-lg leading-7 max-md:max-w-full">
              Our platform empowers you to create and distribute personalized videos that resonate with your audience. Enhance your outreach and build stronger connections with prospects through the power of video.
            </p>
          </div>
          <div className="flex flex-col mt-8 w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-6 items-start py-2 w-full max-md:max-w-full">
              <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
                <h3 className="text-xl font-bold leading-snug">Easy Sharing</h3>
                <p className="mt-4 text-base leading-6">
                  Share videos via email or social media with just a few clicks.
                </p>
              </div>
              <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
                <h3 className="text-xl font-bold leading-snug">Boost Engagement</h3>
                <p className="mt-4 text-base leading-6">
                  Capture attention and drive responses with compelling video content tailored for prospects.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg"
          className="object-cover flex-1 shrink self-stretch my-auto w-full aspect-[0.96] basis-0 min-w-[240px] max-md:max-w-full rounded-md shadow-lg"
          alt="Video sharing with prospects"
        />
      </div>
    </section>
  );
};

export default Sharing;
