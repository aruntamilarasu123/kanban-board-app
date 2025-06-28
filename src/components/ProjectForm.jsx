import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function ProjectForm({ close, id, projectName = '', projectDescription = '' }) {
  const [name, setName] = useState(projectName);
  const [description, setDescription] = useState(projectDescription);

  const {
    setTitle,
    setMessage,
    setBadge,
    setType,
    addProject,
    updateProject,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const ref = useRef(null);

  const saveProject = event => {
    event.preventDefault();

    if (name === '') {
      setBadge(true);
      setType('danger');
      setTitle('Error');
      setMessage("Title must not be empty!");
    } else if (description === '') {
      setBadge(true);
      setType('danger');
      setTitle('Error');
      setMessage("Description must not be empty!");
    } else {
      const data = { name, description };
      if (id) {
        const { slug: updatedSlug } = updateProject(id, data);
        setBadge(true);
        setTitle('Success');
        setMessage('Project updated successfully');
        setType('success');
        setName('');
        setDescription('');
        close();
        navigate(`/project/${updatedSlug}`);
      } else {
        const { slug: newSlug } = addProject(data);
        setBadge(true);
        setTitle('Success');
        setMessage('Project created successfully');
        setType('success');
        setName('');
        setDescription('');
        navigate(`/project/${newSlug}`);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        close();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [close]);

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <form
        ref={ref}
        onSubmit={saveProject}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 space-y-6"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {id ? 'Edit' : 'Create'} Project
          </h2>
          <p className="text-sm text-gray-500">
            {id
              ? 'Update your project details below.'
              : 'Fill out the form to add a new project.'}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="taskTitle"
              className="block text-base font-medium text-gray-700"
            >
              Project Title
            </label>
            <input
              id="taskTitle"
              name="taskTitle"
              type="text"
              className="p-2 mt-1 block w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter project name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="taskBody"
              className="block text-base font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="taskBody"
              name="taskBody"
              rows="4"
              className="p-2 mt-1 block w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Describe your project..."
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={close}
            className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition shadow-sm font-medium"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
