import React from "react";
import ParticlesComponent from "./ParticlesTwo";
import LoadingAnimation from "./LoadingAnimation";
import { useUserContext } from "../../context";
import AlumniCard from "./AlumniCard";

const AlumniList = () => {
  const { club } = useUserContext();
  if (!club || !club.alumnies) {
    return <LoadingAnimation />;
  }
  return (
    <div className="relative">
      <ParticlesComponent />
      <section className="relative z-10 text-gray-200 py-20 px-6 md:px-20">
        <div className="flex items-center justify-center mt-16">
          <h2
            className="text-6xl font-bold text-center mb-16 p-2 border-2 border-transparent rounded-md transition-all duration-500 ease-in-out transform hover:border-white hover:shadow-lg hover:scale-105 cursor-pointer"
            style={{
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
            }}
          >
            Our Alumni
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {club.alumnies.map((alumni, idx) => (
            <AlumniCard
              key={idx}
              name={alumni.name}
              batch={alumni.graduationYear}
              email={alumni.email}
              profilePicture={alumni.photo}
              bio={alumni.about}
              company={alumni.company}
              profession={alumni.profession}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default AlumniList;
