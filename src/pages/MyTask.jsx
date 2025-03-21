import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const MyTask = () => {
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete); 
    setTasks(updatedTasks); 
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
  };

  return (
    <div className="px-24 pt-16">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-medium">My Tasks</h1>
        <div className="flex items-center gap-2 text-2xl" style={{color: "#974FD0"}}>
          <IoMdAdd />
          <a href="/newtask">Add New Task</a>
        </div>
      </div>
      {tasks.length > 0 ? (
        <>
          <div className="mt-12 space-y-12">
            {tasks.map((task, index) => (
              <div key={index} className="border-2 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  {" "}
                  <span
                    className="inline-block mt-4 text-2xl"
                    style={{
                      color:
                        task.selectedTag === "urgent" ? "#F38383" : "#73C3A6",
                    }}
                  >
                    {task.selectedTag}
                  </span>
                  <div className="flex gap-8">
                    <button
                      onClick={() => navigate("/edittask", { state: { task, index } })}
                      style={{ backgroundColor: "#974FD0" }}
                      className="text-white text-xl py-2 rounded-md px-4 flex items-center gap-2"
                    >
                      <FaRegEdit />
                      Edit
                    </button>
                    <button
                     onClick={() => handleDelete(index)}
                      className="text-xl py-2 rounded-md px-6 flex items-center gap-2"
                      style={{ color: "#974FD0", border: "1px solid #974FD0" }}
                    >
                      <RiDeleteBinLine />
                      Delete
                    </button>
                  </div>
                </div>
                <hr className="mt-4" />
                <h2 className="text-4xl mt-4 font-semibold">
                  {task.taskTitle}
                </h2>
                <p className="text-2xl mt-2" style={{ color: "#737171" }}>
                  {task.description}
                </p>
              </div>
            ))}
          </div>
          <a
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="block mx-auto text-center underline mt-10 mb-14 text-2xl cursor-pointer"
            style={{ color: "#974FD0" }}
          >
            Back To Top
          </a>
        </>
      ) : (
        <p className="text-lg mt-8">No tasks available.</p>
      )}
    </div>
  );
};

export default MyTask;
