import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Contact() {
    const {loading,portfolioData}=useSelector((state)=>state.root);
    const {contact} = portfolioData;
     
    return (
        <div>
            <SectionTitle title="Contact" />
            <div className='flex sm:flex-col items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-tertiary text-2xl'>{'{'}</h1>
                    {Object.keys(contact).map((key) => ( key!== '_id' &&
                        <h1 className='ml-5'>
                            <span className='text-tertiary text-2xl sm:text-lg'>{key} : </span>
                            <span className='text-tertiary text-2xl sm:text-lg'>{contact[key]}</span>
                        </h1>
                    ))
                    }
                    <h1 className='text-tertiary text-2xl'>
                        {'}'}
                    </h1>
                </div>
                <div className='h-[500px]'>

                <dotlottie-player 
                src="https://lottie.host/21b71d71-3920-42b4-9ca8-b8c87001cf04/A4qDsaX8Zf.json" 
                background="transparent" speed="1"
                loop autoplay></dotlottie-player>
                </div>
            </div>
        </div>
    )
}

export default Contact
