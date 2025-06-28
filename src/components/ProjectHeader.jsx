import React, { useContext, useState } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import date from '../support/Date';
import ConfirmDialog from './ConfirmDialog';

const ProjectHeader = ({ data, open }) => {
  const { setBadge, setTitle, setMessage, setType, removeProject, projects } = useContext(AuthContext);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const navigate = useNavigate();

  const { id, name, description, created } = data;

  function projectNumber() {
    const index = projects.findIndex(p => p.id === id);
    return index !== -1 ? index + 1 : null;
  }

  const deleteProject = () => {
    removeProject(id);
    setBadge(true);
    setTitle('Successful operation');
    setMessage('Project deleted successfully');
    setType('success');
    navigate('/projects');
    setDeleteDialogOpen(false);
  };

  return (
    <>
      {deleteDialogOpen && (
        <ConfirmDialog
          headerText="Delete Project"
          bodyText="Are you sure you want to delete this project?"
          confirmText="Sure!"
          onConfirm={deleteProject}
          onCancel={() => setDeleteDialogOpen(false)}
        />
      )}

      <section className="bg-gradient-to-br from-white via-indigo-50 to-indigo-100 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 rounded-xl shadow-md transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Project Info */}
          <div>
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-wide mb-1">
              Project Overview
            </p>
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
              {projectNumber()}. {name}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Created: {date(new Date(created))}
            </p>
            <p className="text-base text-gray-700 mt-4 leading-relaxed">
              {description || 'No description provided.'}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4">
            <button
              onClick={() => setDeleteDialogOpen(true)}
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-lg shadow transition font-medium w-full sm:w-auto"
            >
              <MdDelete className="text-xl" />
              Delete
            </button>
            <button
              onClick={open}
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition font-medium w-full sm:w-auto"
            >
              <MdModeEdit className="text-xl" />
              Edit
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default ProjectHeader;
