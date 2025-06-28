import React, { useContext, useRef, useState } from 'react';
import AuthContext from '../context/AuthContext';
import {
  MdCheck,
  MdClose,
  MdOutlineOpenInFull,
} from 'react-icons/md';

const TaskForm = ({
  close,
  laneId,
  editTitle,
  editBody,
  edit,
  taskId,
  project,

}) => {
  const {
    setBadge,
    setTitle,
    setMessage,
    setType,
    addTask,
    updateTask,
  } = useContext(AuthContext);

  const [title, setTaskTitle] = useState(editTitle ?? '');
  const [body, setBody] = useState(editBody ?? '');
  const [isFullScreen, setIsFullScreen] = useState(false);

  const ref = useRef(null);

  const saveTask = event => {
    event.preventDefault();

    if (title.trim() === '') {
      setBadge(true);
      setType('danger');
      setTitle('Error');
      setMessage("Title mustn't be empty!");
    } else if (body.trim() === '') {
      setBadge(true);
      setType('danger');
      setTitle('Error');
      setMessage("Body mustn't be empty!");
    } else {
      const data = { title, body };

      if (edit) {
        updateTask(taskId, data);
        setBadge(true);
        setTitle('Successful operation');
        setMessage('Task updated successfully');
        setType('success');
        setTaskTitle('');
        setBody('');
        edit();
      } else {
        addTask({ ...data, project: project.id, stage: laneId });
        setBadge(true);
        setTitle('Successful operation');
        setMessage('Task created successfully');
        setType('success');
        setTaskTitle('');
        setBody('');
        close(false);
      }
    }
  };

  const openFullscreen = () => {
    const elem = ref.current;
    if (elem.requestFullscreen) {
      !isFullScreen ? elem.requestFullscreen() : document.exitFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      !isFullScreen ? elem.webkitRequestFullscreen() : document.webkitExitFullscreen();
    } else if (elem.msRequestFullscreen) {
      !isFullScreen ? elem.msRequestFullscreen() : document.msExitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div
      ref={ref}
      className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto w-full transition-all"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="w-full">
          <label
            htmlFor="taskTitle"
            className="block text-sm font-semibold text-gray-800 mb-2"
          >
            Task Title
          </label>
          <input
            name="taskTitle"
            type="text"
            placeholder="Enter task title"
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={title}
            onChange={e => setTaskTitle(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <button
            onClick={openFullscreen}
            title="Toggle Fullscreen"
            className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition"
          >
            <MdOutlineOpenInFull className="text-lg" />
          </button>
          <button
            onClick={() => {
              if (close) close(false);
              if (edit) edit();
            }}
            title="Cancel"
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
          >
            <MdClose className="text-lg" />
          </button>
          <button
            onClick={saveTask}
            title="Save"
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition"
          >
            <MdCheck className="text-lg" />
          </button>
        </div>
      </div>

      <div>
        <label
          htmlFor="taskBody"
          className="block text-sm font-semibold text-gray-800 mb-2"
        >
          Task Description
        </label>
        <textarea
          name="taskBody"
          id="taskBody"
          className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
          placeholder="Describe the task..."
          rows={5}
          value={body}
          onChange={e => setBody(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TaskForm;
