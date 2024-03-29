import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Projectss() {
    const [selectedItemIndex,setSelectedItemIndex]=React.useState(0);
    const {loading,portfolioData}=useSelector((state)=>state.root);
    const {projects} = portfolioData;

  return (
    <div>
      <SectionTitle title='Projects'/>
      <div className='flex py-10 gap-10 sm:flex-col'>
        <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
            {projects.map((project, index)=>(
                <div onClick={()=>{
                    setSelectedItemIndex(index);
                }}
                className='cursor-pointer'>
                    <h1 className={`text-xl px-10 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3' : 'text-white' } `}>{project.title}</h1>

                    </div>
            ))}
        </div>
        {/* <div className='flex items-center justify-center gap-10 sm:flex-col'> */}
        {/* <img src={projects[selectedItemIndex].image} alt='' className="h-60 w-72" /> */}
        <div className='flex flex-col gap-5 w-full'>
                <h1 className='text-secondary text-2xl'>Title : {projects[selectedItemIndex].title}</h1>
                <h1 className='text-tertiary text-2xl'>Techs : {projects[selectedItemIndex].technologies.join(', ')}</h1>
                <p className='text-white text-xl'>
                {projects[selectedItemIndex].description}
                </p>
                <p className='text-tertiary text-2xl'><a target="_blank" href={projects[selectedItemIndex].link}>Go to the Website !</a></p>
        </div>
        </div>
       

      </div>
    // </div>
  )
}

export default Projectss
