import React from 'react';
import { Form, input } from 'antd';
import {useSelector} from 'react-redux';


function AdminIntro() {
    const {portfolioData}=useSelector((state)=>state.root);
    const onFinish=(values)=>{
console.log(values)
    }

    return (
        <div>
            <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.intro}>
                <Form.Item name="welcomeText" label="welcomeText">
                    <input placeholder='Intro' />
                </Form.Item>
                <Form.Item name="firstname" label="FirstName">
                    <input placeholder='FirstName' />
                </Form.Item>
                <Form.Item name="lastname" label="LastName">
                    <input placeholder='LastName' />
                </Form.Item>
                <Form.Item name="caption" label="Caption">
                    <input placeholder='Caption' />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <textarea placeholder='Description' />
                </Form.Item>
                <div className='flex justify-end w-full'>
                    <button className='px-10 py-2 bg-primary text-white' type='submit'>SAVE</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminIntro
