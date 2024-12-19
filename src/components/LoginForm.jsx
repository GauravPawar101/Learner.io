
  import React from 'react';

export default function LoginForm() {
  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div><h1 className='absolute text-4xl m-0 text-white'>Learner.io</h1></div>
    <div>
    <form className="w-80 space-y-6">
      {/* Label and Input for Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          className="w-full bg-transparent border-b-2 border-gray-500 focus:border-blue-100 focus:outline-none focus:ring-0 focus:shadow focus:shadow-white-400 placeholder-gray-400 text-white transition duration-200"
        />
      </div>
      {/* Label and Input for Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          className="w-full bg-transparent border-b-2 border-gray-500 focus:border-blue-100 focus:outline-none focus:shadow focus:shadow-white-400 placeholder-gray-400 text-white transition duration-200"
        />
      </div>
      {/* Label and Input for Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Your Password"
          className="w-full bg-transparent border-b-2 border-gray-500 focus:border-blue-100 focus:outline-none focus:ring-0 focus:shadow focus:shadow-white-400 placeholder-gray-400 text-white transition duration-200"
        />
      </div>
      {/* Submit Button */}
      <div className='flex justify-center'>
        <button
          type="submit"
          className=" w- bg-blue-600 hover:bg-white font-semibold hover:text-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
        >
          Submit
        </button><a href='#' className='block my-2 text-blue-300 justify-self-center'>Forgot Password?</a>
      </div>
      <a href='#' className='block my-2 text-blue-300 justify-self-center'>Don't have an account?</a>
    </form></div>
  </div>
  
  )
}

