import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Course() {
    const [selectedItemIndex,setSelectedItemIndex]=React.useState(0);
    const {loading,portfolioData}=useSelector((state)=>state.root);
    const {courses} = portfolioData;

  return (
    <div>
      <SectionTitle title='Courses'/>
      <div className='flex py-10 gap-10 sm:flex-col'>
        <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
            {courses.map((course, index)=>(
                <div onClick={()=>{
                    setSelectedItemIndex(index);
                }}
                className='cursor-pointer'>
                    <h1 className={`text-xl px-10 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3' : 'text-white' } `}>{course.title}</h1>

                    </div>
            ))}
        </div>
        {/* <div className='flex items-center justify-center gap-10 sm:flex-col'> */}
        {/* <img src={courses[selectedItemIndex].image} alt='' className="h-50 w-80" /> */}
        <div className='flex flex-col gap-5 w-full'>
                <h1 className='text-secondary text-2xl'>Title : {courses[selectedItemIndex].title}</h1>
                {/* <h1 className='text-tertiary text-xl'>{courses[selectedItemIndex].company}</h1> */}
                <p className='text-white text-xl'>
                    {courses[selectedItemIndex].description}
                </p>

        </div>
        </div>

      </div>
    // </div>
  )
}

export default Course
