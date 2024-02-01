import React, { useState } from "react";
import bell from "../assets/Overview/notif.svg";
import profile_pic from "../assets/Overview/Profil.png";
import running_task from "../assets/Overview/patient.svg";
import activity from "../assets/Overview/Activity.svg";
import task_image from "../assets/Overview/task_images/Image.png";

import calender from "../assets/Overview/Calender.svg";

import TaskDisplay from "../components/TaskDisplay";

const tasks = [
  {
    id: 1,
    name: "Creating Mobile App Design",
    image: task_image,
    progress: 75,
    timeLeft: "3 days left",
    profilePictures: [profile_pic, profile_pic],
    subtitle: "UI/UX Design",
  },
  {
    id: 2,
    name: "Creating Perfect Website",
    image: task_image,
    progress: 50,
    timeLeft: "7 days left",
    profilePictures: [profile_pic, profile_pic],
    subtitle: "Web Developer",
  },
  {
    id: 3,
    name: "Creating Perfect Website",
    image: task_image,
    progress: 20,
    timeLeft: "7 days left",
    profilePictures: [profile_pic, profile_pic],
    subtitle: "Web Developer",
  },
  {
    id: 4,
    name: "Creating Perfect Website",
    image: task_image,
    progress: 30,
    timeLeft: "7 days left",
    profilePictures: [profile_pic, profile_pic],
    subtitle: "Web Developer",
  },
  {
    id: 5,
    name: "Creating Perfect Website",
    image: task_image,
    progress: 90,
    timeLeft: "7 days left",
    profilePictures: [profile_pic, profile_pic],
    subtitle: "Web Developer",
  },
  // ... more tasks
];

const Overview = () => {
  return (
    <>
      <div className="flex space-x-10">
        {/* Main Bar  */}
        <div className="flex-grow  bg-[#F5F5F7] h-screen pt-8 px-3">
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
          <div className="flex justify-between px-4">
            <img src={running_task} alt="" />
            <img src={activity} alt="" />
          </div>

          {/* Upcoming Tasks */}
          <TaskDisplay tasks={tasks} cardsToShow={3} />
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
