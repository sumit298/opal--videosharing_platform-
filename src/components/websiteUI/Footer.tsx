import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex overflow-hidden flex-col px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start w-full min-h-[248px] max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-10 items-start basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-col flex-1 shrink items-start basis-0">
            <img
              loading="lazy"
              src="https://via.placeholder.com/84" // Replace with actual company logo URL
              className="object-contain aspect-[2.33] w-[84px]"
              alt="Company logo"
            />
          </div>
          <div className="flex overflow-hidden flex-col flex-1 shrink basis-0">
            <div className="text-base font-semibold text-black">Quick Links</div>
            <div className="flex flex-col mt-4 w-full text-sm text-black">
              <div className="flex-1 shrink py-2 w-full">About Us</div>
              <div className="flex-1 shrink py-2 w-full">Contact Us</div>
              <div className="flex-1 shrink py-2 w-full">Support Center</div>
              <div className="flex-1 shrink py-2 w-full">Blog Posts</div>
              <div className="flex-1 shrink py-2 w-full">Help Center</div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col flex-1 shrink basis-0">
            <div className="text-base font-semibold text-black">Resources</div>
            <div className="flex flex-col mt-4 w-full text-sm text-black">
              <div className="flex-1 shrink py-2 w-full">Case Studies</div>
              <div className="flex-1 shrink py-2 w-full whitespace-nowrap">Webinars</div>
              <div className="flex-1 shrink py-2 w-full whitespace-nowrap">E-books</div>
              <div className="flex-1 shrink py-2 w-full whitespace-nowrap">FAQs</div>
              <div className="flex-1 shrink py-2 w-full">User Guides</div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col flex-1 shrink basis-0">
            <div className="text-base font-semibold text-black">Stay Connected</div>
            <div className="flex flex-col mt-4 w-full text-sm text-black">
              <div className="flex-1 shrink py-2 w-full">Facebook Page</div>
              <div className="flex-1 shrink py-2 w-full">Twitter Feed</div>
              <div className="flex-1 shrink py-2 w-full">LinkedIn Profile</div>
              <div className="flex-1 shrink py-2 w-full">YouTube Channel</div>
              <div className="flex-1 shrink py-2 w-full">Instagram Page</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-[240px] w-[400px]">
          <div className="flex flex-col w-full text-base text-black">
            <div className="font-semibold">Subscribe</div>
            <div className="mt-4">
              Join our newsletter for the latest updates and features.
            </div>
          </div>
          <div className="flex flex-col mt-6 w-full">
            <div className="flex gap-4 items-start w-full text-base">
              <input
                type="email"
                placeholder="Your Email Here"
                className="flex-1 shrink gap-2 self-stretch p-3 border border-black border-solid basis-6 min-w-[240px] text-stone-500"
              />
              <button className="gap-2 self-stretch px-6 py-3 text-black whitespace-nowrap border border-black border-solid w-[119px] max-md:px-5">
                Join
              </button>
            </div>
            <div className="mt-3 text-xs text-black">
              By subscribing, you consent to our Privacy Policy and updates.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex w-full bg-black border border-black border-solid min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-wrap gap-10 justify-between items-start mt-8 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-6 items-center text-sm text-black min-w-[240px] max-md:max-w-full">
            <div className="self-stretch my-auto text-black">
              © 2024 VideoProspecting. All rights reserved.
            </div>
            <div className="self-stretch my-auto underline">Privacy Policy</div>
            <div className="self-stretch my-auto underline">Terms of Service</div>
            <div className="self-stretch my-auto underline">Cookie Settings</div>
          </div>
          <div className="flex gap-3 items-start">
            {/* Font Awesome Icons for Social Media */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-black w-6 h-6"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-black w-6 h-6"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-black w-6 h-6"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube text-black w-6 h-6"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-black w-6 h-6"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
