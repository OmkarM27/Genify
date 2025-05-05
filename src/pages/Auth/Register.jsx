// src/pages/auth/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1607746882042-944635dfe10e)',
        }}>
        <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center text-white px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            the one stop solution for your enterprise
          </h2>
          <p className="mt-6 text-center text-lg">
            Explore all new possibilities with Geniffy use cases
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-widest">GENiFFY</h1>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 bg-[radial-gradient(ellipse_at_top_right,_#0f2027,_#203a43,_#2c5364)] text-white">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Login to Geniffy</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 rounded bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-2 rounded hover:bg-gray-200 transition">
              Continue
            </button>

            <div className="flex items-center my-2">
              <hr className="flex-grow border-neutral-600" />
              <span className="mx-2 text-sm">or</span>
              <hr className="flex-grow border-neutral-600" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded hover:bg-gray-200 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </form>

          <p className="text-xs text-neutral-400 mt-6">
            Lorem ipsum dolor sit amet consectetur. Eget venenatis est adipiscing senectus. Adipiscing lorem est scelerisque congue donec in.
          </p>

          <p className="mt-4 text-sm">
            Don’t have an account?{' '}
            <Link
              to="/register"
              className="text-white font-semibold underline underline-offset-2">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;