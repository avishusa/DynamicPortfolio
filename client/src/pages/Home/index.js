import React from 'react'
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';
import Experiences from './Experiences';
import Projectss from './Projectss';
import Course from './Course';
import Contact from './Contact';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';


function Home() {
  return (
    <div>
        <Header/>
        <div className='bg-primary px-40 sm:px-5'>
        <Intro/>
        <About />
        <Experiences />
        <Projectss />
        <Course />
        <Contact />
        <Footer />
        <LeftSidebar />
        </div>
        
    </div>
  )
}

export default Home
