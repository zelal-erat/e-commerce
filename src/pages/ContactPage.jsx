import React from "react";

const ContactPage = () => {
  const locations = [
    {
      city: "Paris",
      address: "1901 Thorn ridge Cir.",
      zip: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215",
    },
    {
      city: "Berlin",
      address: "4140 Parker Rd.",
      zip: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215",
    },
    {
      city: "New York",
      address: "2715 Ash Dr. San Jose,",
      zip: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215",
    },
    {
      city: "London",
      address: "3517 W. Gray St. Utica,",
      zip: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#002A38] to-[#0099CC] text-white flex flex-col items-center p-6 lg:flex-row lg:justify-around">
   <div className="text-center lg:text-left">
      <h2 className="text-3xl font-bold mb-3 ">CONTACT US</h2>
      <p className=" text-gray-300 max-w-xs mb-6">
        Problems trying to resolve the conflict between the two major realms of Classical physics:
        Newtonian mechanics
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md mb-8">CONTACT US</button>
      </div>
      <div className="w-full max-w-md lg:flex lg:gap-[50px]  lg:flex-wrap">
        {locations.map((location, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-bold text-lg">{location.city}</h3>
            <p className="text-gray-200">{location.address}</p>
            <div className="w-12 h-1 bg-blue-500 my-2"></div>
            <p className="text-gray-400">{location.zip}</p>
            <p className="text-gray-400">Phone: {location.phone}</p>
            <p className="text-gray-400">Fax: {location.fax}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
