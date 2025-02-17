import React from "react";

const teamMembers = [
  { id: 1, name: "Jerome Bell", company: "IBM", image: "https://images.placeholders.dev/100" },
  { id: 2, name: "Brooklyn Simmons", company: "eBay", image: "https://images.placeholders.dev/100" },
  { id: 3, name: "Ronald Richards", company: "Starbucks", image: "https://images.placeholders.dev/100" },
  { id: 4, name: "Floyd Miles", company: "Facebook", image: "https://images.placeholders.dev/100" },
  { id: 5, name: "Jerome Bell", company: "IBM", image: "https://images.placeholders.dev/100" },
  { id: 6, name: "Brooklyn Simmons", company: "eBay", image: "https://images.placeholders.dev/100" },
  { id: 7, name: "Ronald Richards", company: "Starbucks", image: "https://images.placeholders.dev/100" },
  { id: 8, name: "Floyd Miles", company: "Facebook", image: "https://images.placeholders.dev/100"},
];

const TeamPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Meet Our Team</h2>
      <p className="text-gray-600 mt-2 max-w-md mx-auto">
        Problems trying to resolve the conflict between the two major realms of Classical physics:
        Newtonian mechanics.
      </p>

      <div className="flex flex-wrap justify-center mt-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-md shadow-lg"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-500">{member.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
