import React, { useState } from "react";
import ParticlesComponent from "../User/Particles";
import Members from "./DashboardComponents/Members";
import Events from "./DashboardComponents/Events";
import Alumnies from "./DashboardComponents/Alumnies";
import Highlights from "./DashboardComponents/Highlights";

function Dashboard() {
  const [view, setView] = useState(0);

  const handleButtonClick = (viewIndex) => {
    setView(viewIndex);
  };

  return (
    <div className="relative">
      <ParticlesComponent />
      <section className="flex flex-col lg:flex-row relative z-10 text-black pt-16 lg:pt-20">
        {/* Sidebar */}
        <div className="bg-blue-300 bg-opacity-50 w-full lg:w-1/4 p-4 rounded-lg shadow-lg mb-6 lg:mb-0">
          <h1 className="text-2xl font-semibold mb-6 text-center">Dashboard</h1>
          <div className="flex flex-col space-y-4">
            <button
              className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              onClick={() => handleButtonClick(0)}
            >
              Members
            </button>
            <button
              className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              onClick={() => handleButtonClick(1)}
            >
              Events
            </button>
            <button
              className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              onClick={() => handleButtonClick(2)}
            >
              Alumnies
            </button>
            <button
              className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              onClick={() => handleButtonClick(3)}
            >
              Highlights
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-opacity-45 w-full lg:w-3/4 p-6 rounded-lg shadow-lg ml-0 lg:ml-4">
          {/* Displaying the selected view */}
          {view === 0 ? (
            <Members />
          ) : view === 1 ? (
            <Events />
          ) : view === 2 ? (
            <Alumnies />
          ) : (
            <Highlights />
          )}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
