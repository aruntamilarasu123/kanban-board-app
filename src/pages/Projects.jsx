import { useContext, useState } from 'react';
import { MdNavigateNext, MdOutlineAddCircle } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectForm from '../components/ProjectForm';
import Sidebar from '../components/Sidebar';
import AuthContext from '../context/AuthContext';
import date from '../support/Date';

function Projects() {
  const { user, projects } = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      {open && <ProjectForm close={() => setOpen(false)} />}
      {sidebar && <Sidebar sidebar={() => setSidebar(false)} />}

      <div className="min-h-screen w-screen flex flex-col bg-gradient-to-br from-white via-indigo-50 to-indigo-100 transition-colors">
        <Navbar sidebar={() => setSidebar(true)} />

        {projects && projects.length > 0 ? (
          <main className="flex flex-col grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
            {/* Header Section */}
            <div className="mb-12 rounded-2xl p-8 border border-gray-200 shadow-lg bg-gradient-to-br from-white via-indigo-50 to-indigo-100 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="grid gap-y-2 max-w-xl transition-all duration-700 ease-out">
                  <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                    Project Management <span className="text-indigo-600">Dashboard</span>
                  </h1>
                  <p className="text-base text-gray-700">
                    Welcome back, <span className="font-semibold">{user.username}</span>{' '}
                    <span className="inline-block animate-wave">👋</span>
                  </p>
                  <p className="text-base text-gray-700">
                    Create and manage your projects with ease.
                  </p>
                </div>

                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-md transition text-base font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:scale-105 transform duration-300"
                >
                  <MdOutlineAddCircle className="text-2xl" />
                  Create a New Project
                </button>
              </div>
            </div>

            {/* Grid Section */}
            <section className="bg-white border border-gray-200 rounded-2xl px-8 py-10 shadow-xl animate-fade-in-up">
              <div className="flex justify-between items-center mb-8 border-b border-gray-300 pb-3 animate-fadeInDown">
                <h2 className="text-2xl font-semibold text-gray-800">
                  View Your Projects 👇
                </h2>
              </div>

              {/* Project Grid */}
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {projects.map((project, key) => (
                  <div
                    key={key}
                    onClick={() => navigate(`/project/${project.slug}/`)}
                    className="group bg-white p-6 rounded-xl border-2 border-gray-200 
                    hover:border-indigo-400 shadow-md hover:shadow-lg transition-all cursor-pointer
                    transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out
                    animate-fadeInUp"
                    style={{ animationDelay: `${key * 100}ms` }}
                  >
                    <div className="flex justify-between items-start mb-5">
                      <div className="flex-1 overflow-hidden">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                          {key + 1}. {project.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {date(new Date(project.created))}
                        </p>
                      </div>
                      <Link
                        to={`/project/${project.slug}/`}
                        className="hidden group-hover:flex bg-indigo-100 p-2 rounded-full text-indigo-600 hover:bg-indigo-200 transition"
                      >
                        <MdNavigateNext className="text-2xl" />
                      </Link>
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-3">
                      {project.description || 'No description provided.'}
                    </p>
                  </div>
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
            </section>
          </main>
        ) : (
          // ✅ Empty state UI
          <div className="flex-grow flex items-center justify-center px-6 py-20">
            <div className="text-center px-6 py-10 bg-white border border-gray-200 rounded-xl shadow-md max-w-md w-full">
              <h2 className="text-2xl font-bold text-gray-700 mb-2">🚫 Project Empty</h2>
              <p className="text-gray-500 text-sm mb-6">
                You don't have any projects yet. Click below to start your first one.
              </p>
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition"
              >
                <MdOutlineAddCircle className="text-lg" />
                Create Your First Project
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Projects;
