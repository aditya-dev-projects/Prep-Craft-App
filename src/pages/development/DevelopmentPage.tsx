import { Link } from "react-router-dom";

const DevelopmentPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl md:text-7xl animate-pulse">
          Coming Soon!
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          We are working hard to bring you an amazing Development course. Stay tuned for exciting content and features!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
            Go to Home
          </Link>
          <Link to="/dsa" className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-700">
            Explore DSA
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentPage;