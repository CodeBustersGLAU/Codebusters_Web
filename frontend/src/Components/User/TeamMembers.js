import React from "react";
import Profile1 from './../../Assets/Profile pictures/1formal.JPG';
import Akshat from './../../Assets/Profile pictures/Akshat.jpg';
import Madushudan from './../../Assets/Profile pictures/Madushudan.jpg';
import Saumya from './../../Assets/Profile pictures/Saumya.jpg';
import Vikas from './../../Assets/Profile pictures/Vikas.jpg';
import Shubhneet from './../../Assets/Profile pictures/Shubhneet.jpg';
import Pranjal from './../../Assets/Profile pictures/Pranjal.jpg';
import Prahsant from './../../Assets/Profile pictures/Prahsant.jpg';
import Raunank from './../../Assets/Profile pictures/Raunank.jpg';
import Palash from './../../Assets/Profile pictures/Palash.jpg';
import Bhavana from './../../Assets/Profile pictures/Bhavana.jpg';
import Sauhard from './../../Assets/Profile pictures/Sauhard.jpg';
import Sneha from './../../Assets/Profile pictures/Sneha.jpg';
import Mohit from './../../Assets/Profile pictures/Mohit.jpg';
import SpectraImage2 from './../../Assets/Spectra3.0/DSC_6640 (13).jpg';
import Jatin from './../../Assets/Profile pictures/jatin-profile-picture-crop1.ccabd51028d488edc02f.png';
import ParticlesComponent from "./ParticlesTwo";
const AssociatesSection = ({ title, members }) => (
  <div className="mb-16">
    <h3 className="text-xl font-semibold mb-8 text-center">{title}</h3>
    <div className="flex flex-wrap justify-around gap-6">
      {members.map(({ name, imgSrc }, idx) => (
        <TeamMember key={idx} name={name} imgSrc={imgSrc} />
      ))}
    </div>
  </div>
);

const TeamMember = ({ title, name, imgSrc }) => (
  <div className="text-center">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <img
      src={imgSrc}
      alt={name}
      className="w-48 h-48 rounded-full mb-2 mx-auto"
      draggable="false" // Prevent dragging
      onContextMenu={(e) => e.preventDefault()}
    />
    <p className="mb-4">{name}</p>
  </div>
);

const TeamMembers = () => {
  return (
    <div className="relative">
      {/* Particles Background */}
      <ParticlesComponent />
      <ParticlesComponent />
      <section className="relative z-10 text-gray-200 py-20 px-6 md:px-20">
        <h2 className="text-6xl font-bold text-center mb-12 mt-6 font-dosis">Our Team</h2>

        {/* Faculty Mentor */}
        <h1 className="text-center mb-6 text-xl font-semibold">Faculty Mentor</h1>
        <img
      src={SpectraImage2}
      alt="Vinay Sir"
      className="w-48 h-48 rounded-full mb-2 mx-auto"
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
    />
    <h2 className="text-center">Mr Vinay Agarwal</h2>
    <h3 className="text-center mb-8">Assistant Professor GLA University, Mathura</h3>
        {/* President */}
        <TeamMember
          title="President"
          name="Jatin Sharma"
          imgSrc={Jatin}
        />

        {/* Vice President, Treasurer, General Secretary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-10">
          <TeamMember
            title="Vice President"
            name="Shiva Gaur"
            imgSrc={Profile1}
          />
          <TeamMember
            title="Treasurer"
            name="Akshat Srivastava"
            imgSrc={Akshat}
          />
          <TeamMember
            title="General Secretary"
            name="Madushudan Singh"
            imgSrc={Madushudan}
          />
        </div>

        {/* Core Teams */}
        <div className="space-y-12">
          {/* Technical Team */}
          <div>
            <h3 className="text-3xl font-semibold mb-9 text-center">
              Technical Team
            </h3>
            <div className="flex items-center justify-around mb-16">
              <TeamMember
                title="Technical Team Head"
                name="Prashant Pathak"
                imgSrc={Prahsant}
              />
              <TeamMember
                title="Technical Team Deputy Head"
                name="Raunak Mishra"
                imgSrc={Raunank}
              />
            </div>
          </div>

          {/* Design Team */}
          <div>
            <h3 className="text-3xl font-semibold mb-9 text-center">
              Design Team
            </h3>
            <TeamMember
              title="Design Team Head"
              name="Sneha Agarwal"
              imgSrc={Sneha}
            />
          </div>

          {/* Public Relation Team */}
          <div>
            <h3 className="text-3xl font-semibold mb-9 text-center">
              Public Relation Team
            </h3>
            <div className="flex items-center justify-around mb-16">
              <TeamMember
                title="Public Relation Team Head"
                name="Saumya Bansal"
                imgSrc={Saumya}
              />
              <TeamMember
                title="Public Relation Team Deputy Head"
                name="Vikas Singh"
                imgSrc={Vikas}
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-9 text-center">
              Event Management Team
            </h3>
            <div className="flex items-center justify-around mb-16">
              <TeamMember
                title="Event Management Team"
                name="Pranjal"
                imgSrc={Pranjal}
              />
              <TeamMember
                title="Event Management Team Deputy Head"
                name="Shubhneet"
                imgSrc={Shubhneet}
              />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-9 text-center">
              Content Team
            </h3>
            <div className="flex items-center justify-around mb-16">
              <TeamMember
                title="Content Team Head"
                name="Mohit Kumar"
                imgSrc={Mohit}
              />
              <TeamMember
                title="Content Team Deputy Head"
                name="Bhavana Jadon"
                imgSrc={Bhavana}
              />
            </div>
          </div>

          <AssociatesSection
        title="Executive Heads"
        members={[
          { name: "Vidhi Khare", imgSrc: Saumya },
          { name: "Sauhard", imgSrc: Sauhard },
          { name: "Palash Agarwal", imgSrc: Palash },
          // Add other members as needed
        ]}
      />


          {/* Associates */}
          <AssociatesSection
            title="Technical Team Associates"
            members={[
              { name: "Kush Kumar", imgSrc: "/images/kush.jpg" },
              { name: "Anirudh", imgSrc: "/images/anirudh.jpg" },
              { name: "Lokesh", imgSrc: "/images/lokesh.jpg" },
              { name: "Deeksha", imgSrc: "/images/deeksha.jpg" },
              { name: "Teena", imgSrc: "/images/teena.jpg" },
            ]}
          />

          <AssociatesSection
            title="Design Team Associates"
            members={[
              { name: "Kritika", imgSrc: "/images/kritika.jpg" },
              { name: "Divyanka", imgSrc: "/images/divyanka.jpg" },
              { name: "Tanshka", imgSrc: "/images/tanshka.jpg" },
              { name: "Ankita", imgSrc: "/images/ankita.jpg" },
            ]}
          />
          <AssociatesSection
          title="Public Relation Team Associates Head"
          members={[
            { name: "Divyanshi", imgSrc: "/images/divyanshi.jpg" },
            { name: "Krishna", imgSrc: "/images/krishna.jpg" },
          ]}
        />
        <AssociatesSection
          title="Content Team Associates Head"
          members={[
            { name: "Divyanshu", imgSrc: "/images/divyanshu.jpg" },
            { name: "Devanshi Bansal", imgSrc: "/images/devanshi.jpg" },
          ]}
        />
        <AssociatesSection
          title="Event Management Team Associates Head"
          members={[
            { name: "Rishi Srivastava", imgSrc: "/images/rishi.jpg" },
            { name: "Ashutosh Divedi", imgSrc: "/images/ashutosh.jpg" },
            { name: "Hardik", imgSrc: "/images/hardik.jpg" },
            { name: "Astha", imgSrc: "/images/astha.jpg" },
            { name: "Kirti", imgSrc: "/images/kirti.jpg" },
            { name: "Priya", imgSrc: "/images/priya.jpg" },
          ]}
        />

        </div>
      </section>
    </div>
  );
};

export default TeamMembers;
