import React, { useState } from "react";
import bell from "../assets/Overview/notif.svg";
import profile_pic from "../assets/Overview/Profil.png";
import running_task from "../assets/Overview/patient.svg";
import activity from "../assets/Overview/Activity.svg";

import calender from "../assets/Overview/Calender.svg";

const Overview = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: "Curious George",
      role: "UI/UX Design",
      profilePicture: profile_pic,
      tasks: 750,
      reviews: 87,
      followed: false, // Add an initial "followed" state
    },
    {
      id: 2,
      name: "Abraham Lincoln",
      role: "3D Design",
      profilePicture: profile_pic,
      tasks: 550,
      reviews: 125,
      followed: true,
    },
    // More mentors...
  ]);

  const handleScrollLeft = () => {
    if (activeCardIndex > 0) {
      setActiveCardIndex(activeCardIndex - 1);
    }
  };

  const handleScrollRight = () => {
    if (activeCardIndex < mentors.length - 1) {
      setActiveCardIndex(activeCardIndex + 1);
    }
  };

  const toggleFollow = (mentorId) => {
    setMentors((prevMentors) =>
      prevMentors.map((mentor) =>
        mentor.id === mentorId
          ? { ...mentor, followed: !mentor.followed }
          : mentor
      )
    );
  };

  return (
    <>
      <div className="flex space-x-10">
        {/* Main Bar  */}
        <div className="flex-grow shadow-lg bg-white pt-8 px-3">
          {/* Profile Details */}
          <div className="flex justify-between mb-12">
            <div>
              <h2 className="font-bold text-xl">Hi, Skylar Dias</h2>
              <p>Let us finish your task today!</p>
            </div>
            <div className="flex space-x-6 items-center">
              <img src={bell} alt="notification icon" className="h-6" />
              <img src={profile_pic} alt="profile picture" className="h-6" />
            </div>
          </div>
          {/* Activity and Running Task  */}
          <div className="flex justify-between">
            <img src={running_task} alt="" />
            <img src={activity} alt="" />
          </div>
          <div className="container mx-auto px-4">
            <header className="flex justify-between items-center py-4">
              <h2 className="text-2xl font-bold">Monthly Mentors</h2>
              <div className="flex">
                <button
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={handleScrollLeft}
                  disabled={activeCardIndex === 0} // Disable when no previous cards
                >
                  &lt;
                </button>
                <button
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={handleScrollRight}
                  disabled={activeCardIndex === mentors.length - 1} // Disable when no next cards
                >
                  &gt;
                </button>
              </div>
            </header>
            <div className="mentor-cards overflow-x-auto scroll transition-all duration-300">
              {/* Use flexbox for responsive card layout */}
              <div className="flex gap-4">
                {mentors.map((mentor, index) => {
                  const isVisible =
                    index >= activeCardIndex && index < activeCardIndex + 2; // Show only visible cards
                  return (
                    isVisible && (
                      <div
                        key={mentor.id}
                        className="mentor-card w-1/2 md:w-1/3"
                      >
                        <div className="flex items-center">
                          <img
                            src={mentor.profilePicture}
                            alt={mentor.name}
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div className="flex flex-col">
                            <span className="text-lg font-medium">
                              {mentor.name}
                            </span>
                            <span className="text-xs font-medium">
                              {mentor.role}
                            </span>
                          </div>
                          <button
                            className="px-3 py-2 text-sm bg-blue-500 text-white rounded-md mt-2"
                            onClick={() => toggleFollow(mentor.id)}
                          >
                            {mentor.followed ? "Followed" : "Follow"}
                          </button>
                        </div>
                        <div className="mt-4 text-sm">
                          <span className="mr-4">Tasks: {mentor.tasks}</span>
                          <span>Reviews: {mentor.reviews}</span>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Side Bar  */}
        <div className="mt-8">
          <div>
            <img src={calender} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
