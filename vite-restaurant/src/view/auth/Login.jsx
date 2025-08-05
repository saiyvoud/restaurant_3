import React from 'react'

const LoginView = () => {
  return (
    <div className='min-h-screen  bg-orange-300'>
        <div className='flex justify-center items-center '>
          <form className='space-y-4 bg-white py-10 px-30 rounded-xl my-20'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxubRRNNVjzgAAej3lHi_AwzByxqjOS3FLA&s' ></img>
          <h1 className='text-center text-xl font-bold '>MD Restaurant</h1>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 mt-5">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 
              rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">password</label>
            <input
              type="password"
              placeholder="******"
              className="w-full px-4 py-2 border border-gray-300 
              rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className='text-end'>
            <p className='text-end text-amber-500'>forgot</p>
          </div>
          <div>
            <button className='bg-amber-500 w-full py-2 text-white text-xl rounded-xl mt-2 '>
                Login
            </button>
          </div>
          </form>
        </div>
    </div>
  )
}


export default LoginView;