import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-primary">TaskManager</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-primary"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Manage Tasks Effortlessly
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Streamline your workflow with our intuitive task management
              platform. Organize, track, and complete tasks efficiently.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                to="/signup"
                className="bg-primary text-white px-6 py-3 rounded-md text-base font-medium hover:bg-primary-dark text-center"
              >
                Get Started Free
              </Link>
              <Link
                to="/login"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-base font-medium hover:bg-gray-100 text-center"
              >
                Login to Your Account
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-32 w-32 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to manage tasks efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-primary bg-opacity-10 w-12 h-12 flex items-center justify-center rounded-md mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Task Assignment
              </h3>
              <p className="text-gray-600">
                Easily assign tasks to team members and track progress.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-primary bg-opacity-10 w-12 h-12 flex items-center justify-center rounded-md mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Deadlines & Reminders
              </h3>
              <p className="text-gray-600">
                Set deadlines and get timely reminders for your tasks.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-primary bg-opacity-10 w-12 h-12 flex items-center justify-center rounded-md mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Progress Tracking
              </h3>
              <p className="text-gray-600">
                Monitor task progress and analyze productivity with visual
                reports.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to streamline your workflow?
              </h2>
              <p className="text-lg text-white text-opacity-90 mb-8">
                Get started with TaskManager today and boost your productivity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/signup"
                  className="bg-white text-primary px-6 py-3 rounded-md text-base font-medium hover:bg-gray-100 text-center"
                >
                  Sign Up Now
                </Link>
                <Link
                  to="/login"
                  className="bg-transparent border border-white text-white px-6 py-3 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-10 text-center"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-bold text-primary">TaskManager</h2>
              <p className="text-sm text-gray-600">
                Simplify your task management
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                to="/login"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 text-center">
              © {new Date().getFullYear()} TaskManager. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
