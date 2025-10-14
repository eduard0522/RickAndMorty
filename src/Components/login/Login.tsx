"use client"

import LoginForm from './Form'

const Login = () => {
  return <div className='w-full flex justify-center items-center relative h-screen overflow-hidden'>
    <LoginForm />
    <div className='absolute  w-56 h-56 xl:w-xl md:h-[576px] ]  bottom-0 right-0 bg-radial from-green-500 to-green-700 rounded-full translate-x-1/3 translate-y-1/3 overflow-hidden opacity-70 blur-2xl'></div>

    <div className='absolute  w-56 h-56 xl:w-xl md:h-[576px]  top-0 left-0 bg-radial from-green-500 to-green-700 rounded-full -translate-x-1/3 -translate-y-1/3 overflow-hidden opacity-70 blur-2xl'></div>
  </div>
}

export default Login