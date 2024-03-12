import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-white'>Hi, I am</h1>
        <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Avish Modi</h1>
        <h1 className='text-7xl sm:text-3xl text-white font-semibold'>I code to debug the life.</h1>
        <p className='text-white w-2/3'>
        Are you in search of a dynamic and motivated entry-level Full Stack Developer
        ready to make an impact? Look no further! I am a creative problem-solver with
        a deep passion for web development and a strong foundation in the MERN stack. 
        </p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Dive in</button>
    </div>
  )
}

export default Intro
