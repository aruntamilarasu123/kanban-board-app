import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Lane from './Lane';

// Lane configuration (unchanged logic, just style enhancements)
const lanes = [
  {
    id: 1,
    title: 'To Do',
    color: 'bg-gray-50',
    border: 'border-gray-200',
    textColor: 'text-gray-800',
    titlecolor: 'bg-gray-100',
    btnhover: 'hover:bg-gray-200',
  },
  {
    id: 2,
    title: 'In Progress',
    color: 'bg-blue-50',
    border: 'border-blue-200',
    textColor: 'text-blue-800',
    titlecolor: 'bg-blue-100',
    btnhover: 'hover:bg-blue-200',
  },
  {
    id: 3,
    title: 'Done',
    color: 'bg-green-50',
    border: 'border-green-200',
    textColor: 'text-green-800',
    titlecolor: 'bg-green-100',
    btnhover: 'hover:bg-green-200',
  },
];

const Board = ({ project }) => {
  const [tasks, setTasks] = useState([]);
  const {
    badge,
    setTitle,
    setMessage,
    setBadge,
    setType,
    tasks: data,
    updateLane,
  } = useContext(AuthContext);

  const onDrop = (e, laneId) => {
    const id = e.dataTransfer.getData('id');
    const updatedTasks = tasks.map(task => {
      if (String(task.id) === id) {
        task.stage = laneId;
        updateLane(task.id, { stage: laneId });

        setBadge(true);
        setType('success');
        setTitle('Successful Operation');
        setMessage('Task moved successfully!');
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const onDragStart = (event, id) => {
    event.dataTransfer.setData('id', id);
  };

  const onDragOver = e => {
    e.preventDefault();
  };

  useEffect(() => {
    setTasks(data);
  }, [data, badge]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex-grow w-full px-4 py-6 md:px-6 lg:px-10 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
          Create & Manage Your Tasks 👇
        </h2>
      </div>

      {/* Lanes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 max-w-screen-2xl mx-auto">
        {lanes.map(lane => (
          <Lane
            key={lane.id}
            title={lane.title}
            color={lane.color}
            border={lane.border}
            textColor={lane.textColor}
            titlecolor={lane.titlecolor}
            btnhover={lane.btnhover}
            laneId={lane.id}
            tasks={tasks.filter(
              task =>
                +task.stage === lane.id && task.project === project.id
            )}
            project={project}
            onDrop={onDrop}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            updateLane={updateLane}
            lanes={lanes}
          />
        ))}
      </div>
      {/* Go to Top Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg transition text-sm font-medium"
        >
          Go to Top
        </button>
      </div>
    </div>
  );
};

export default Board;
