// Done
import React from 'react';
import '../css/LoginForm.css';
import Cubes from './Cubes';

export default function LoginForm({mode}) {
  return (<div>
    {mode==='login'?(<div className='wrapper flex items-center justify-center'>
      
      <div className='flex items-center justify-center form-wrapper  shadow-lg hover:shadow-xl delay-400 transition relative'>
        <div className='lg:flex left-wala w-[80vh] h-[80vh] items-center justify-center hidden'>
        <Cubes></Cubes>
        </div>
        <div className='form01 flex items-center justify-center'>
        <form className='p-6 md:w-[80vh] md:h-[80vh] justify-items-center'>
        <h1 className="text-2xl font-bold mb-4 absolute py-[10vh] px-[30vh]">Login</h1>
          <div className='mb-4 absolute my-[25vh] mx-[15vh] '>
            <label htmlFor='email' className='text-xl block'>Enter Email:</label>
            <input name='email' placeholder='Your Email' className='block outline-none bg-transparent border-b-2 border-black py-1'></input>
          </div>
            <div className=' mb-4 absolute my-[35vh] mx-[15vh]'>
            <label htmlFor='pass' className='block text-xl'>Enter Password:</label>
            <input name='pass' placeholder='Your Password' className='bg-transparent outline-none my-2 border-b-2 border-black transition delay-200'></input>
            <a href='#' className='block forgot text-blue-650 text-semibold'>Forgot Password?</a>
            <button className='block my-2 btn'>Submit</button>
            <button className='SignUp'>Doesn't have an account?</button>
            </div>
        </form>
        </div>
      </div>
    </div>):(
      <div className='wrapper flex items-center justify-center'>
      
      <div className='flex items-center justify-center form-wrapper  shadow-lg hover:shadow-xl delay-400 transition relative'>
        <div className='lg:flex left-wala w-[80vh] h-[80vh] items-center justify-center hidden'>
        <Cubes></Cubes>
        </div>
        <div className='form01 flex items-center justify-center'>
        <form className='p-6 md:w-[80vh] md:h-[80vh] justify-items-center'>
        <h1 className="text-2xl font-bold mb-4 absolute py-[10vh] px-[30vh]">Sign Up</h1>
          <div className='mb-4 absolute my-[20vh] mx-[15vh] '>
            <label htmlFor='email' className='text-xl block'>Enter Email:</label>
            <input name='email' placeholder='Your Email' className='block outline-none bg-transparent border-b-2 border-black py-1'></input>
          </div>
          <div className=' mb-4 absolute my-[30vh] mx-[15vh]'>
            <label htmlFor='pass' className='block text-xl'>Enter Password:</label>
            <input name='pass' placeholder='Your Password' className='bg-transparent outline-none my-2 border-b-2 border-black transition delay-200'></input>
            </div>
            <div className='absolute my-[35vh] mx-[15vh]'>
            
            <label htmlFor='pass' className='passAg block text-xl'>Enter Password Again:</label>
            <input name='pass' placeholder='Enter Password again' className='bg-transparent outline-none my-2 border-b-2 border-black transition delay-200'></input>
            <a href='#' className='block forgot text-blue-650 text-semibold'>Forgot Password?</a>
            <button className='block my-2 btn'>Sign Up</button>
            <button href='#' className='SignUp'>Log in</button>
          </div>
        </form>
        </div>
      </div>
    </div>
    )}
</div>
)
}

