import React, { useState } from "react";

const TaskDisplay = ({ tasks, cardsToShow = 2, ...otherProps }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleScrollLeft = () => {
    if (activeCardIndex > 0) {
      setActiveCardIndex(activeCardIndex - 1);
    }
  };

  const handleScrollRight = () => {
    if (activeCardIndex < tasks.length - cardsToShow) {
      setActiveCardIndex(activeCardIndex + 1);
    }
  };

  const toggleFollow = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, followed: !task.followed } : task
      )
    );
  };

  return (
    <div className="container mx-auto px-4 mb-10 {otherProps.className}">
      {" "}
      <header className="flex justify-between items-center py-4">
        <h2 className="text-2xl font-bold">{otherProps.headerText}</h2>
        <div className="flex">
          <button
            className="px-4 py-2 rounded-md hover:bg-gray-300"
            onClick={handleScrollLeft}
            disabled={activeCardIndex === 0}
          >
            &lt;
          </button>
          <button
            className="px-4 py-2  rounded-md hover:bg-gray-300"
            onClick={handleScrollRight}
            disabled={activeCardIndex === tasks.length - cardsToShow}
          >
            &gt;
          </button>
        </div>
      </header>
      <div className="task-cards overflow-x-auto scroll transition-all duration-300">
        <div className="flex gap-3">
          {tasks.map((task, index) => {
            const isVisible =
              index >= activeCardIndex && index < activeCardIndex + cardsToShow;
            return (
              isVisible && (
                <div
                  key={task.id}
                  className="task-card h-fit bg-white p-3 shadow-md rounded-lg w-1/2 md:w-1/3"
                >
                  <div className="image-container h-2/5 relative">
                    <img
                      src={task.image}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className=" px-4 py-2  rounded-bl-lg rounded-br-lg text-black">
                    <span className="text-lg font-medium block">
                      {task.name}
                    </span>
                    <span className="text-sm">{task.subtitle}</span>
                  </div>
                  <div className="progress-section px-4 mt-4 flex justify-between items-center">
                    <div className="text-sm">Progress</div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{task.progress}%</span>
                    </div>
                  </div>
                  {/* Progress Bar  */}
                  <div className="px-4">
                    <div className="bg-gray-200  h-2 rounded-full w-full">
                      <div
                        className="bg-blue-500 h-full rounded-full"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="time-left px-4 flex justify-between items-center mt-2">
                    <span className="text-sm">{task.timeLeft}</span>
                    <div className="flex -space-x-3">
                      {task.profilePictures.map((profilePicture) => (
                        <img
                          key={profilePicture}
                          src={profilePicture}
                          alt=""
                          className="w-8 h-8 rounded-full object-cover border-2 border-white"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

TaskDisplay.defaultProps = {
  tasks: [],
  cardsToShow: 2,
  headerText: "Upcoming Tasks",
};

export default TaskDisplay;
