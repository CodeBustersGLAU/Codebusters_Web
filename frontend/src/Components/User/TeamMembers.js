import React from "react";
import Profile from "./../../Assets/Profile pictures/profile.jpg";
const TeamMembers = () => {
  return (
    <section className="bg-gray-900 text-gray-200 py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>

      {/* President */}
      <div className="mb-10 text-center">
        <h3 className="text-xl font-semibold mb-4">President</h3>
        <div className="flex flex-col items-center">
          <img
            src={Profile}
            alt="President"
            className="w-24 h-24 rounded-full mb-2"
          />
          <p>John Doe</p>
        </div>
      </div>

      {/* Vice President, Treasurer, General Secretary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">Vice President</h3>
          <img
            src={Profile}
            alt="Vice President"
            className="w-24 h-24 rounded-full mb-2 mx-auto"
          />
          <p>Jane Smith</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Treasurer</h3>
          <img
            src={Profile}
            alt="Treasurer"
            className="w-24 h-24 rounded-full mb-2 mx-auto"
          />
          <p>James Brown</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">General Secretary</h3>
          <img
            src={Profile}
            alt="General Secretary"
            className="w-24 h-24 rounded-full mb-2 mx-auto"
          />
          <p>Emma Wilson</p>
        </div>
      </div>

      {/* Core Teams */}
      <div className="space-y-12">
        {/* Technical Team */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Technical Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Alice", "Bob", "Charlie", "David"].map((member, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={Profile}
                  alt={member}
                  className="w-24 h-24 rounded-full mb-2 mx-auto"
                />
                <p>{member}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Team */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Content Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Sophia", "Liam", "Olivia", "Ethan"].map((member, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={Profile}
                  alt={member}
                  className="w-24 h-24 rounded-full mb-2 mx-auto"
                />
                <p>{member}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PR Team */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">PR Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Aiden", "Chloe", "Elijah", "Mia"].map((member, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={Profile}
                  alt={member}
                  className="w-24 h-24 rounded-full mb-2 mx-auto"
                />
                <p>{member}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Design Team */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Design Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Noah", "Amelia", "Lucas", "Isabella"].map((member, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={Profile}
                  alt={member}
                  className="w-24 h-24 rounded-full mb-2 mx-auto"
                />
                <p>{member}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Management Team */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Management Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Henry", "Ella", "Jack", "Grace"].map((member, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={Profile}
                  alt={member}
                  className="w-24 h-24 rounded-full mb-2 mx-auto"
                />
                <p>{member}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
