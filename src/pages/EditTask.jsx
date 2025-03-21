
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const EditTask = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    navigate("/mytask");
    return null;
  }

  const { task, index } = location.state;

  /* eslint-disable react-hooks/rules-of-hooks */
  const [taskTitle, setTaskTitle] = useState(task.taskTitle);
  const [description, setDescription] = useState(task.description);
  const [selectedTag, setSelectedTag] = useState(task.selectedTag);

  const handleUpdate = () => {
    const updatedTask = { taskTitle, description, selectedTag };
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks[index] = updatedTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    navigate("/mytask");
  };

  return (
    <div className="px-20 pt-16">
      <div className="flex items-center gap-2 text-5xl font-medium">
        <a href="/mytask">
          <IoIosArrowBack />
        </a>
        <span>Edit Task</span>
      </div>
      <div className="px-4">
        {/* Task Title */}
        <div className="relative w-full mt-16">
          <label
            htmlFor="task-title"
            className="absolute -top-5 left-10 bg-white px-1 text-3xl"
            style={{ color: "#9C9C9C" }}
          >
            Task Title
          </label>
          <input
            type="text"
            id="task-title"
            placeholder="E.g Project Defense, Assignment ..."
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="placeholder-light block w-full text-2xl rounded-sm border-2 border-gray-300 bg-transparent py-4 px-10 text-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>

        {/* Description */}
        <div className="relative w-full mt-14">
          <label
            htmlFor="description"
            className="absolute -top-5 left-10 bg-white px-1 text-3xl"
            style={{ color: "#9C9C9C" }}
          >
            Description
          </label>
          <textarea
            id="description"
            placeholder="Briefly describe your task..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="placeholder-light block w-full text-2xl rounded-sm border-2 border-gray-300 bg-transparent h-48 pt-4 px-10 text-lg focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
          ></textarea>
        </div>

        {/* Tags */}
        <div className="relative w-full mt-14">
          <label
            htmlFor="tags"
            className="absolute -top-5 left-10 bg-white px-1 text-3xl"
            style={{ color: "#9C9C9C" }}
          >
            Tags
          </label>
          <div
            id="tags"
            className="flex items-center gap-4 w-full rounded-sm border-2 border-gray-300 bg-transparent py-4 px-10 text-lg focus-within:ring-1 focus-within:ring-purple-500"
          >
            <button
              className={`p-1 rounded-sm text-lg font-medium ${
                selectedTag === "urgent"
                  ? "bg-black text-white"
                  : "bg-gray-400 text-gray-300"
              }`}
              onClick={() => setSelectedTag("urgent")}
            >
              Urgent
            </button>
            <button
              className={`p-1 rounded-sm text-lg font-medium ${
                selectedTag === "important"
                  ? "bg-black text-white"
                  : "bg-gray-400 text-gray-300"
              }`}
              onClick={() => setSelectedTag("important")}
            >
              Important
            </button>
          </div>
        </div>

        {/* Update Button */}
        <button
          onClick={handleUpdate}
          className="w-full p-4 text-white mt-16 rounded-lg text-2xl"
          style={{ background: "#974FD0" }}
        >
          Done
        </button>
        <a
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="block mx-auto text-center underline mt-8 mb-12 text-2xl cursor-pointer"
          style={{ color: "#974FD0" }}
        >
          Back To Top
        </a>
      </div>
    </div>
  );
};

export default EditTask;
