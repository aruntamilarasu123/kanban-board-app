import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

const Lane = ({
  laneId,
  title,
  tasks,
  onDragStart,
  onDragOver,
  onDrop,
  project,
  color,
  border,
  textColor,
  titlecolor,
  btnhover,
  updateLane,
  lanes,
  
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onDragOver={onDragOver}
      onDrop={e => onDrop(e, laneId)}
      className={`text-left rounded-md min-h-[24rem] min-w-[20rem] border-2 ${border} ${color} animate-fade-in-up`}
    >
      <div className={`flex justify-between items-center mb-4 p-4 ${titlecolor}`}>
        <h2 className={`font-bold ${textColor}`}>{title}</h2>
        <p className="bg-white px-3 py-0.5 rounded-full text-black border-2 text-sm font-bold">
          {tasks.length}
        </p>
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-4">
          {tasks.map((task, index) => (
            <Task
              key={task.id}
              {...task}
              serial={index + 1}
              onDragStart={onDragStart}
              project={project}
              stage={task.stage}
              updateLane={updateLane}
              lanes={lanes}
            />
          ))}

          {open ? (
            <TaskForm close={setOpen} laneId={laneId} project={project} />
          ) : (
            <button
              onClick={() => setOpen(true)}
              className={`mt-2 py-2 rounded-md font-bold ${btnhover} border ${border} ${textColor} ${titlecolor}`}
            >
              Add Task
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lane;
