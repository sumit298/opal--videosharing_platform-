import React from 'react';

interface Feature {
  title: string;
  description: string;
}

interface LayoutProps {
  isMobile?: boolean;
  title: string;
  tagline?: string;
  description: string;
  features: Feature[];
  imageSrc?: string;
}

const Layout: React.FC<LayoutProps> = ({ isMobile = false, title, tagline, description, features, imageSrc }) => {
  if (isMobile) {
    return (
      <section className="flex overflow-hidden flex-col justify-center px-5 py-16 max-w-full bg-white w-[375px]">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full text-black">
              {tagline && (
                <span className="self-start text-base font-semibold whitespace-nowrap">{tagline}</span>
              )}
              <h2 className="mt-3 text-4xl font-bold leading-10">{title}</h2>
              <p className="mt-5 text-base leading-6">{description}</p>
            </div>
            <div className="flex flex-col py-2 mt-6 w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col w-full">
                  <h3 className="text-lg font-bold leading-snug">{feature.title}</h3>
                  <p className="mt-3 text-base leading-6">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          {imageSrc && (
            <img loading="lazy" src={imageSrc} alt="Feature illustration" className="object-contain mt-12 w-full aspect-[0.96] max-md:mt-10" />
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="flex overflow-hidden flex-col justify-center px-16 py-28 w-full bg-white max-w-[1440px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full text-black max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              {tagline && (
                <span className="self-start text-base font-semibold whitespace-nowrap">{tagline}</span>
              )}
              <div className="flex flex-col mt-4 w-full max-md:max-w-full">
                <h2 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">{title}</h2>
                <p className="mt-6 text-lg leading-7 max-md:max-w-full">{description}</p>
              </div>
            </div>
            <div className="flex flex-col mt-8 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-6 items-start py-2 w-full max-md:max-w-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
                    <h3 className="text-xl font-bold leading-snug">{feature.title}</h3>
                    <p className="mt-4 text-base leading-6">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center self-start mt-8 text-base text-black">
            <button className="overflow-hidden gap-2 self-stretch px-6 py-3 my-auto border border-black border-solid max-md:px-5">
              Learn More
            </button>
            <button className="flex overflow-hidden gap-2 justify-center items-center self-stretch my-auto">
              <span className="self-stretch my-auto">Sign Up</span>
              <img loading="lazy" src="http://b.io/ext_70-" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </button>
          </div>
        </div>
        {imageSrc && (
          <img loading="lazy" src={imageSrc} alt="Feature illustration" className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[0.96] basis-0 min-w-[240px] max-md:max-w-full" />
        )}
      </div>
    </section>
  );
};

export default Layout;