import React from 'react';
import { Form, input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading, HideLoading } from "../../redux/rootslice";
import axios from "axios";
import {message} from "antd";


function AdminContact() {
    const dispatach = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const onFinish = async (values) => {
        try {
            dispatach(showLoading())
            const response = await axios.post("https://avish-portfolio.onrender.com/api/portfolio/update-contact", {...values,_id:portfolioData.contact._id});
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
            <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.contact}>
                
                <Form.Item name="name" label="Name">
                    <input placeholder='Name' />
                </Form.Item>
                <Form.Item name="email" label="Email">
                    <input placeholder='Email' />
                </Form.Item>
                <Form.Item name="mobile" label="Mobile">
                    <input placeholder='Mobile' />
                </Form.Item>
                <Form.Item name="interests" label="Interests">
                    <textarea placeholder='Interests' />
                </Form.Item>
                <div className='flex justify-end w-full'>
                    <button className='px-10 py-2 bg-primary text-white' type='submit'>SAVE</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminContact
