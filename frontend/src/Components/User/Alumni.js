import React from "react";
import AlumniCard from "./AlumniCard";

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
    <section className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
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
  );
}

export default AlumniList;
