import React from 'react';
import { Form, input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading, HideLoading } from "../../redux/rootslice";
import axios from "axios";
import {message} from "antd";


function AdminIntro() {
    const dispatach = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const onFinish = async (values) => {
        try {
            dispatach(showLoading())
            const response = await axios.post("/api/portfolio/update-intro", {...values,_id:portfolioData.intro._id});
            dispatach(HideLoading())
            if(response.data.success){
                message.success(response.data.message)
            }else{
                message.error(response.data.message)
   
            }

        } catch (error) {
            dispatach(HideLoading())
            message.error(error.message)
        }
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
