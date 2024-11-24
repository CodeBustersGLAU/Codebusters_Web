import React from "react";
import AlumniCard from "./AlumniCard";
import ParticlesComponent from "./ParticlesTwo";
function AlumniList() {
  const alumniData = [
    {
      name: "John Doe",
      batch: 2020,
      email: "john.doe@example.com",
      profilePicture: "https://via.placeholder.com/150",
      bio: "A passionate coder and leader who co-founded Codebusters Club. Currently a Software Engineer at TechCorp.",
    },
    {
      name: "Jane Smith",
      batch: 2019,
      email: "jane.smith@example.com",
      profilePicture: "https://via.placeholder.com/150",
      bio: "Full-stack developer at Innovate Inc. Helped organize multiple events and mentored juniors in the club.",
    },
    {
      name: "John Doe",
      batch: 2020,
      email: "john.doe@example.com",
      profilePicture: "https://via.placeholder.com/150",
      bio: "A passionate coder and leader who co-founded Codebusters Club. Currently a Software Engineer at TechCorp.",
    },
    {
      name: "Jane Smith",
      batch: 2019,
      email: "jane.smith@example.com",
      profilePicture: "https://via.placeholder.com/150",
      bio: "Full-stack developer at Innovate Inc. Helped organize multiple events and mentored juniors in the club.",
    },
    {
      name: "John Doe",
      batch: 2020,
      email: "john.doe@example.com",
      profilePicture: "https://via.placeholder.com/150",
      bio: "A passionate coder and leader who co-founded Codebusters Club. Currently a Software Engineer at TechCorp.",
    },
    {
      name: "Jane Smith",
      batch: 2019,
      email: "jane.smith@example.com",
      profilePicture: "https://via.placeholder.com/150",
      bio: "Full-stack developer at Innovate Inc. Helped organize multiple events and mentored juniors in the club.",
    },
    {
      name: "John Doe",
      batch: 2020,
      email: "john.doe@example.com",
      profilePicture: "https://via.placeholder.com/150",
      bio: "A passionate coder and leader who co-founded Codebusters Club. Currently a Software Engineer at TechCorp.",
    },
    {
      name: "Jane Smith",
      batch: 2019,
      email: "jane.smith@example.com",
      profilePicture: "https://via.placeholder.com/150",
      bio: "Full-stack developer at Innovate Inc. Helped organize multiple events and mentored juniors in the club.",
    },
    {
      name: "John Doe",
      batch: 2020,
      email: "john.doe@example.com",
      profilePicture: "https://via.placeholder.com/150",
      bio: "A passionate coder and leader who co-founded Codebusters Club. Currently a Software Engineer at TechCorp.",
    },
    {
      name: "Jane Smith",
      batch: 2019,
      email: "jane.smith@example.com",
      profilePicture: "https://via.placeholder.com/150",
      bio: "Full-stack developer at Innovate Inc. Helped organize multiple events and mentored juniors in the club.",
    },
    {
      name: "John Doe",
      batch: 2020,
      email: "john.doe@example.com",
      profilePicture: "https://via.placeholder.com/150",
      bio: "A passionate coder and leader who co-founded Codebusters Club. Currently a Software Engineer at TechCorp.",
    },
    {
      name: "Jane Smith",
      batch: 2019,
      email: "jane.smith@example.com",
      profilePicture: "https://via.placeholder.com/150",
      bio: "Full-stack developer at Innovate Inc. Helped organize multiple events and mentored juniors in the club.",
    },
    // Add more alumni here...
  ];

  return (
    <div className="relative">
    {/* Particles Background */}
    <ParticlesComponent />
    <ParticlesComponent />
    <section className="relative z-10 text-gray-200 py-20 px-6 md:px-20">
      <h2 className="text-5xl font-bold text-center text-gray-200 mb-8 mt-16">
        Our Alumni
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {alumniData.map((alumni, index) => (
          <AlumniCard
            key={index}
            name={alumni.name}
            batch={alumni.batch}
            email={alumni.email}
            profilePicture={alumni.profilePicture}
            bio={alumni.bio}
          />
        ))}
      </div>
    </section>
    </div>
  );
}

export default AlumniList;
