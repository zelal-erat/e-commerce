import React from "react";

const Clients = ({ src, alt, link, width = 80, height = 80 }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <img
        src={src}
        alt={alt}
        className="grayscale hover:grayscale-0 transition-all duration-300"
        style={{
          maxWidth: `${width}px`,
          maxHeight: `${height}px`,
          objectFit: "contain",
        }}
      />
    </a>
  );
};

export default Clients;
