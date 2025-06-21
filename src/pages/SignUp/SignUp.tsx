import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
    <div className="flex justify-center items-center h-screen bg-purple-950">
        <div className="w-[32rem] h-3/4 bg-blue-800 rounded-lg border border-pink-700">
            <h1>Sign Up</h1>
            <form action="#">
                <div className="flex flex-col items-center justify-center space-y-3 pt-8">
                    <img src="/dark-nav-logo.png" alt="main-logo" className="w-auto h-10" />
                </div>
                <div className="flex flex-col items-center justify-start space-y-8 pt-8 w-[80%] mx-auto">
                    <div className="w-full">
                        <label htmlFor="email" className="text-sm text-white">Email</label>
                        <input type="email" placeholder="Email" className="w-full p-2 rounded-md border border-gray-300" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password" className="text-sm text-white">Password</label>
                        <input type="password" placeholder="Password" className="w-full p-2 rounded-md border border-gray-300" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="confirm-password" className="text-sm text-white">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" className="w-full p-2 rounded-md border border-gray-300" />
                    </div>
                    <div className="w-full">
                        <button type="submit" className="w-full p-2 rounded-md bg-green-500 text-white">Sign Up</button>
                    </div>
                    <div className="w-full">
                        <p className="text-sm text-white">Already have an account?</p>
                        <Link to="/login">
                            <button type="button" className="w-full p-2 rounded-md bg-green-500 text-white">Sign In</button>
                        </Link>
                    </div>
                    
                </div>
            </form>
        </div>
        
    </div>
    </>
  )
}

export default SignUp