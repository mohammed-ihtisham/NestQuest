import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="bg-[url('https://images.squarespace-cdn.com/content/v1/6000cefdddb1fc1f39fa3116/71a6ab64-9335-4dfd-bf39-a4b86abe1e6f/Luxury_Classic_Home.jpeg')] bg-cover bg-center flex h-screen items-center justify-center lg:justify-end">
      <div className="max-w-lg rounded-xl border-2 border-blue-950 p-5 bg-white shadow-lg h-5/6 w-5/6 lg:w-1/3 lg:mr-10">
        <div className="flex flex-col items-center justify-center h-full">
          <Link to='/'>
            <img src="src/images/logo.png" alt="Logo" className='h-28 mb-3 '/>
          </Link>
          <h1 className="text-center text-3xl font-bold font-sans mb-1">Create Your Account</h1>
          <p className="mb-6 text-center">Join thousands of NestQuesters around the world!</p>
          <div className="w-full px-3 mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-2">Username</label>
            <input id="username" type="text" placeholder="Username" className="w-full p-3 rounded bg-slate-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-900"/>
          </div>
          <div className="w-full px-3 mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input id="email" type="email" placeholder="Email" className="w-full p-3 rounded bg-slate-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-900"/>
          </div>
          <div className="w-full px-3 mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
            <input id="password" type="password" placeholder="Password" className="w-full p-3 rounded bg-slate-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-900"/>
          </div>
          <div className="w-full px-3 mt-5">
            <button className="bg-slate-700 text-white p-3 rounded-lg w-full hover:opacity-95">Sign Up</button>
          </div>
          <form>
            <div className='flex gap-2 mt-5'>
              <p>Already have an account?</p>
              <Link to={"/log-in"}>
                <span className='text-blue-800'>Log in</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
