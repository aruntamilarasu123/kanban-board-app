import React, { useContext, useEffect, useRef, useState } from 'react';
import { MdDelete, MdOutlineMoreVert, MdModeEdit } from 'react-icons/md';
import AuthContext from '../context/AuthContext';

const Options = ({ taskId, edit }) => {
  const { setTitle, setMessage, setBadge, setType, removeTask } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const deleteTask = () => {
    removeTask(taskId);
    setBadge(true);
    setTitle('Successful operation');
    setMessage('Task deleted successfully');
    setType('success');
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-label="Options"
        className="focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
      >
        <MdOutlineMoreVert className="text-gray-600 hover:text-gray-900 text-xl" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 sm:w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1 flex flex-col">
            <button
              onClick={deleteTask}
              className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-100 rounded-t transition"
              type="button"
            >
              <MdDelete className="text-lg" />
              Delete
            </button>
            <button
              onClick={edit}
              className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-100 rounded-b transition"
              type="button"
            >
              <MdModeEdit className="text-lg" />
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Options;
