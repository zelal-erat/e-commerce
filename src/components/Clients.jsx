import React from "react";

const logos = [
  { name: "Tools", src: "/images/logo-5.png", link: "#" },
  { name: "Lyft", src: "/images/logo-1.png", link: "https://www.lyft.com" },
  { name: "Stripe", src: "/images/logo-3.png", link: "https://www.stripe.com" },
  { name: "AWS", src: "/images/logo-2.png", link: "https://aws.amazon.com" },
  { name: "Reddit", src: "/images/logo-4.png", link: "https://www.reddit.com" },
  { name: "Reddit", src: "/images/logo-6.png", link: "https://www.reddit.com" },
];

const Clients = () => {
  return (
    <div className="  flex flex-col items-center bg-gray-100 lg:flex-row  lg:gap-[100px] lg:justify-around">
      {logos.map((logo, index) => (
        <a
          key={index}
          href={logo.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 w-15 h-15 flex justify-center items-center"
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="w-full h-full object-contain transition-all duration-300 filter grayscale-50 hover:filter-none hover:grayscale-0"
          />
        </a>
      ))}
    </div>
  );
};

export default Clients;
