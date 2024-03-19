import React from 'react'
import {Modal, Form} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading, HideLoading, ReloadData } from "../../redux/rootslice";
import axios from "axios";
import {message} from "antd";

function AdminExperiences() {
    const dispatach= useDispatch();
    const {portfolioData}=useSelector((state)=>state.root);
    const {experiences}=portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);

    const onFinish = async (values) => {
        try {
            dispatach(showLoading())
            const response = await axios.post("/api/portfolio/add-experience", values);
            dispatach(HideLoading())
            if(response.data.success){
                message.success(response.data.message)
                setShowAddEditModal(false);
                dispatach(HideLoading());
                dispatach(ReloadData(true));
            }else{
                message.error(response.data.message);
                console.log(response.data.message);
            }

        } catch (error) {
            dispatach(HideLoading())
            message.error(error.message);
            console.log("catch",error.message)

        }
    }
  return (
    <div>
        <div className='flex justify-end mb-3'>

            <button className='bg-primary px-5 py-2 text-white'
            onClick={()=>{
                setSelectedItemForEdit(null);
                setShowAddEditModal(true);
            }}>
                Add Experience
            </button>

        </div>
        <div className='grid grid-cols-4 gap-5'>
        {experiences.map((experience)=>(
            <div className='shadow border p-5 border-gray-400 flex flex-col'>
                <h1 className='text-primary text-xl font-bold'>{experience.period}</h1>
                <hr/>
                <h1>Company : {experience.company}</h1>
                <h1>Role : {experience.title}</h1>
                <h1>{experience.description}</h1>
                <div className='flex justify-end gap-5 mt-5'>
                    <button className='bg-primary text-white px-5 py-2 '>Edit</button>
                    <button className='bg-red-500 text-white px-5 py-2 '>Delete</button>
                </div>
                </div>
        ))}
        </div>
                    <Modal visible={showAddEditModal}
                    title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
                    footer={null}
                    onCancel={()=>setShowAddEditModal(false)}>
                        
                        <Form layout='verticle' onFinish={onFinish}>
                            <Form.Item name='period' label='Period'>
                                <input placeholder="Period" />
                            </Form.Item>
                            <Form.Item name='company' label='Company'>
                                <input placeholder="Company" />
                            </Form.Item>
                            <Form.Item name='title' label='Title'>
                                <input placeholder="Title" />
                            </Form.Item>
                            <Form.Item name='description' label='Description'>
                                <input placeholder="Description" />
                            </Form.Item>
                            <div className='flex justify-end'>
                            <button className='border-primary text-primary bg-white px-5 py-2' onClick={()=>{setShowAddEditModal(false)}}>
                            Cancel
                            </button>
                            <button className='bg-primary text-white px-5 py-2' >
                                {selectedItemForEdit ? "Update" : "Add"}
                            </button>
                            </div>
                        </Form>
                    </Modal>
    </div>
    
  )
}

export default AdminExperiences
