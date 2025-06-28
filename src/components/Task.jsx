import React, { useState } from 'react';
import TaskForm from './TaskForm';
import date from '../support/Date';
import Options from './Options';

const Task = ({
  id,
  title,
  body,
  created,
  onDragStart,
  project,
  serial,
  stage,
  updateLane,
  lanes,
}) => {
  const [edit, setEdit] = useState(false);

  const handleNext = () => {
    if (stage < 3) {
      updateLane(id, { stage: stage + 1 });
    }
  };

  // Dynamically get the name of the next stage
  const nextStageName = stage < 3
    ? lanes.find(lane => lane.id === stage + 1)?.title
    : null;

  return (
    <>
      {edit ? (
        <TaskForm
          edit={() => setEdit(false)}
          editBody={body}
          editTitle={title}
          taskId={id}
          project={project}
          updateLane={updateLane}
        />
      ) : (
        <div
          className="bg-white p-5 rounded-xl border border-gray-300 shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing max-w-full"
          draggable
          onDragStart={e => onDragStart(e, id)}
          style={{ wordBreak: 'break-word' }}
        >
          {/* Header: title + options */}
          <div className="flex justify-between items-start mb-3">
            <div className="max-w-[75%]">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {serial}. {title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {date(new Date(created))}
              </p>
            </div>
            <Options taskId={id} edit={() => setEdit(true)} />
          </div>

          {/* Body */}
          <p className="text-sm text-gray-800 whitespace-pre-wrap">{body}</p>

          {/* Footer: Button or Completed Message */}
          <div className="mt-4 flex justify-end">
            {stage < 3 ? (
              <button
                onClick={handleNext}
                className="text-sm text-indigo-600 font-medium hover:underline"
              >
                Move to {nextStageName}
              </button>
            ) : (
              <span className="text-sm font-medium text-green-600">
                Completed
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
