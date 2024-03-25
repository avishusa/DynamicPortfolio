import React from 'react';
import Header from '../../components/Header';
import {Tabs} from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminExperiences from './AdminExperiences';
import AdminProjects from './AdminProjects';
import AdminCourses from './AdminCourses';
import AdminContact from './AdminContact';
const {TabPane}=Tabs;


function Admin() {
    const {portfolioData} = useSelector((state)=>state.root)
    return (
        <div>
            <Header />
            <h1 className='text-2xl px-5 py-2 text-primary'>Portfolio Admin</h1>

           {portfolioData &&  <div className='px-5 pb-10'>
                <Tabs defaultActiveKey='1'>
                    <TabPane tab="Intro" key='1'>
                        <AdminIntro />
                    </TabPane>
                    <TabPane tab="About" key="2">
                        <AdminAbout />
                    </TabPane>
                    <TabPane tab="Experiences" key="3">
                        <AdminExperiences />
                    </TabPane>
                    <TabPane tab="Projects" key="4">
                        <AdminProjects />
                    </TabPane>
                    <TabPane tab="Courses" key="5">
                        <AdminCourses />
                    </TabPane>
                    <TabPane tab="Contact" key="6">
                        <AdminContact />
                    </TabPane>
                </Tabs>
            </div>}
        </div>
    )
}

export default Admin
