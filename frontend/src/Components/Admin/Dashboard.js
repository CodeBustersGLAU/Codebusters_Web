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
    <div>
      <ParticlesComponent />
      <div className="flex flex-row h-screen w-full x-10 relative mt-20">
        <div className="bg-blue-300 bg-opacity-50 w-1/5 p-4">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="flex flex-col space-y-2 mt-6">
            <button
              className="p-2 bg-blue-500 text-white rounded"
              onClick={() => handleButtonClick(0)}
            >
              Members
            </button>
            <button
              className="p-2 bg-blue-500 text-white rounded"
              onClick={() => handleButtonClick(1)}
            >
              Events
            </button>
            <button
              className="p-2 bg-blue-500 text-white rounded"
              onClick={() => handleButtonClick(2)}
            >
              Alumnies
            </button>
            <button
              className="p-2 bg-blue-500 text-white rounded"
              onClick={() => handleButtonClick(3)}
            >
              Highlights
            </button>
          </div>
        </div>
        <div className="bg-green-300 bg-opacity-45 w-4/5 p-6">
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
      </div>
    </div>
  );
}

export default Dashboard;
