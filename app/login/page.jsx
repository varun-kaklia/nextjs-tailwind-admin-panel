"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

const Login = () => {
  useEffect(()=>{
    document.title="Login"
  },[])
  return (
    <div className='w-screen h-screen'>
    <div className=" bg-customBlue w-full h-full">
    <div className="flex justify-center">
      <div className="lg:w-2/3 xl:1/3 2xl:1/3 w-2/3 md:2/3 sm:2/3 ">
        <div className=" bg-white shadow-lg border-0 rounded-lg mt-5">
          <div className="py-4 bg-gray-50 rounded-t-lg border-b border-gray-300">
            <h3 className="text-center text-slate-700 text-3xl font-medium my-4">Login</h3>
          </div>
          <div className="h-full p-4 w-full">
            <form>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email address
                </label>
                <input
                  id="inputEmail"
                  type="email"
                  className="form-input"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  id="inputPassword"
                  type="password"
                  className="form-input"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3 items-center flex">
                <input
                  id="inputRememberPassword"
                  type="checkbox"
                  className="pr-2 ring-customBlue focus:outline-offset-4 focus:bg-customBlue focus:checked:text-customBlue focus:border-2 focus:ring-2 focus:ring-customBlue focus:rounded-lg h-4 w-4"
                  value=""
                />
                <label className="pl-2" htmlFor="inputRememberPassword">
                  Remember Password
                </label>
              </div>
              <div className="flex items-center justify-between mt-4 mb-0">
                <a className="text-sm text-blue-500" href="password.html">
                  Forgot Password?
                </a>
                <Link href="/dashboard" className="btn bg-customBlue text-white hover:bg-blue-600">
                  Login
                </Link>
              </div>
            </form>
          </div>
          <div className="bg-gray-50 text-center border-t rounded-b-lg p-4 border-gray-300 py-3">
            <div className="text-sm p-2">
              <Link href={'/register'}>Need an account? Sign up!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className='bg-white w-full flex justify-between items-center py-5 px-2 text-gray-500 bottom-0 absolute'>
      <div className='flex justify-start items-center'>
        <p>Copyright &copy; Your Website 2023 </p>
      </div>
      <div className='flex justify-center items-center'>
        <button className='text-customBlue'>Privacy Policy</button>
        <span className='pb-2 px-2 text-2xl'>.</span>
        <button className='text-customBlue'>Terms & Conditions</button>
      </div>
    </footer>
  </div>
  </div>
);
}

export default Login