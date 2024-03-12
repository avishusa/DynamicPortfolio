import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
    const skills=[
        'JavaScript',
        'React',
        'Node',
        'Express',
        'MongoDB',
        'MySQL',
        'Java',
        'Python',
        'Django',
        'Docker',
        'Git'
    ]
    return (
        <div>
            <SectionTitle title="About" />
            <div className='flex w-full items-center sm:flex-col'>
                <div className='h-[80vh] w-1/2 sm:w-full'>

                    <dotlottie-player
                        src="https://lottie.host/73aa0d8f-4544-46da-bfb5-0d78b5a8a1bf/8P1TvoxDXh.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay>
                    </dotlottie-player>        </div>
                <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                    <p className='text-white text-xl'>
                        I see web development as an art form, blending the power of JavaScript, React.js, Node.js, and
                        MongoDB to bring ideas to life. From wireframing captivating user interfaces (UI) to architecting
                        efficient back-end systems, I am excited to contribute my skills to a collaborative team.With a knack
                        for responsive web design using HTML5 and CSS3, I create visually stunning and user-friendly interfaces
                        that leave a lasting impression. I thrive in the challenge of building seamless user experiences (UX)
                        that keep visitors engaged and satisfied.</p>
                    <p className='text-white text-xl'>
                        While I am embarking on my journey,I am acquiring the knowledge in cloud platforms like AWS,
                         DevOps practices, Docker containerization, and the exciting world of microservices architecture.
                        If you are seeking a passionate and driven entry-level Full Stack Developer, let's connect! Together, we can
                        create innovative web experiences that leave a lasting impact. Get in touch and let's embark on this exciting
                        journey of web development together.
                    </p>
                </div >
            </div>
            <div className='py-5'>
                    <h1 className='text-secondary text-2xl'>Here are a few technologies I have been working with recently:</h1>
                  <div className='flex flex-wrap gap-10 mt-5'> 
                    {skills.map((skill,index)=>(
                        <div className='border border-tertiary py-3 px-10'>
                            <h1 className='text-tertiary'>
                                {skill}
                            </h1>
                            </div>
                    ))}
                    </div>
                </div>
        </div>
    )
}

export default About
