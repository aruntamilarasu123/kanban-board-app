import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { slugify } from "../support/Text";

const Sidebar = ({ sidebar }) => {
  const {
    user,
    setTitle,
    setMessage,
    setBadge,
    setType,
    projects,
    addProject,
  } = useContext(AuthContext);

  const [add, setAdd] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const saveProject = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setBadge(true);
      setType("danger");
      setTitle("Error");
      setMessage("Title mustn't be empty!");
    } else if (description.trim() === "") {
      setBadge(true);
      setType("danger");
      setTitle("Error");
      setMessage("Body mustn't be empty!");
    } else {
      const slug = slugify(name);
      const data = { name, description };
      addProject(data);

      setBadge(true);
      setTitle("Successful operation");
      setMessage("Project created successfully");
      setType("success");
      setName("");
      setDescription("");
      setAdd(false);
    }
  };

  return (
    <>
      <div
        onClick={sidebar}
        className="fixed inset-0 bg-black/50 z-30"
      ></div>
      <aside className="fixed top-0 left-0 w-80 h-full bg-white shadow-lg overflow-y-auto z-40 flex flex-col">
        <div className="p-6 border-b border-gray-300">
          <p className="text-gray-800">
            Hello <span className="font-bold">{user.username}</span>
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Your Projects</h1>
        </div>

        <nav className="flex-grow overflow-y-auto">
          {projects.map((project, key) => (
            <Link
              key={key}
              to={`/project/${project.slug}`}
              onClick={() => sidebar()}
              className="block px-6 py-3 text-gray-800 hover:bg-gray-100 whitespace-nowrap truncate border-b border-gray-200 transition-colors"
              title={project.name}
            >
              {project.name}
            </Link>
          ))}
        </nav>

        <div className="border-t border-gray-300 p-6">
          {add ? (
            <form onSubmit={saveProject} className="space-y-4">
              <div>
                <label htmlFor="taskTitle" className="sr-only">
                  Project title
                </label>
                <input
                  id="taskTitle"
                  name="taskTitle"
                  type="text"
                  placeholder="Project title"
                  className="w-full border-b border-gray-400 pb-1 font-semibold bg-transparent text-gray-900 focus:outline-none focus:border-indigo-600 transition"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="taskBody" className="sr-only">
                  Project description
                </label>
                <textarea
                  id="taskBody"
                  name="taskBody"
                  rows={4}
                  placeholder="Project description..."
                  className="w-full border border-gray-300 rounded-md p-2 resize-y text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setAdd(false)}
                  className="flex-grow py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-grow py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                >
                  Save
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setAdd(true)}
              className="w-full py-3 rounded-md bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
            >
              Add a project
            </button>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
