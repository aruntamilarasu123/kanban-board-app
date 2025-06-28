import { Link } from 'react-router-dom';

const HomeNav = () => {
  return (
    <nav className="w-full bg-gradient-to-br from-white via-indigo-50 to-indigo-100 shadow-md transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center py-4 space-y-4 lg:space-y-0">

          {/* Logo & Title */}
          <Link className="flex items-center gap-3" to="/">
            <img src="/KanBan.png" alt="TaskFlow Logo" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-bold font-mono text-gray-800">Kanban Board</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-4 lg:gap-6">
            <Link to="/projects">
              <button className="bg-indigo-600 text-white rounded-full font-medium text-sm px-5 py-2.5 hover:bg-indigo-700 transition duration-300 shadow-md">
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
