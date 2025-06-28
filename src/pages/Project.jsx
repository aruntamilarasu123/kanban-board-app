import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Board from '../components/Board';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import ProjectForm from '../components/ProjectForm';
import ProjectHeader from '../components/ProjectHeader';
import Sidebar from '../components/Sidebar';
import AuthContext from '../context/AuthContext';

const Project = () => {
  const { projects } = useContext(AuthContext);
  const [project, setProject] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const { slug } = useParams();

  const loadProject = slug => {
    setLoading(true);
    const foundProject = projects.find(p => p.slug === slug);
    setProject(foundProject);
    setLoading(false);
  };

  useEffect(() => {
    loadProject(slug);
  }, [slug]);

  return (
    <>
      {/* Modal for editing project */}
      {open && project && (
        <ProjectForm
          close={() => setOpen(false)}
          projectName={project.name}
          projectDescription={project.description}
          id={project.id}
        />
      )}

      {/* Sidebar toggle */}
      {sidebar && <Sidebar sidebar={() => setSidebar(false)} />}

      {/* Main layout */}
      <div className="flex flex-col min-h-screen w-full bg-gray-50 overflow-x-hidden">
        <Navbar sidebar={() => setSidebar(true)} />

        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {project ? (
            <>
              <ProjectHeader data={project} open={() => setOpen(true)} />
              <Board project={project} />
            </>
          ) : (
            <section className="flex flex-col items-center justify-center text-center min-h-[70vh] px-4">
              {loading ? (
                <Loading />
              ) : (
                <>
                  <h1 className="text-3xl sm:text-4xl font-semibold text-yellow-600 mb-6 max-w-md mx-auto">
                    Project{' '}
                    <span className="text-gray-900 font-normal">not found!</span>
                  </h1>
                  <img
                    src="/404.png"
                    alt="not found"
                    className="w-full max-w-sm h-auto mb-8 mx-auto"
                  />
                  <Link to="/">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold px-8 py-3 text-base transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      Return to Home
                    </button>
                  </Link>
                </>
              )}
            </section>
          )}
        </main>
      </div>
    </>
  );
};

export default Project;
