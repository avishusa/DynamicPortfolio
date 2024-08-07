import React from 'react'
import {Modal, Form} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading, HideLoading, ReloadData } from "../../redux/rootslice";
import axios from "axios";
import {message} from "antd";

function AdminProjects() {
    const dispatach= useDispatch();
    const {portfolioData}=useSelector((state)=>state.root);
    const {projects}=portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [type,setType]=React.useState("add");
    const [form] = Form.useForm();


    const onDelete = async (item) => {

        try {
            dispatach(showLoading());
            const response = await axios.post("https://avish-portfolio.onrender.com/api/portfolio/delete-project",{
                _id : item._id,
            });
            dispatach(HideLoading());
            if(response.data.success){
                message.success(response.data.message)
                dispatach(HideLoading())
                dispatach(ReloadData(true))
            }else{
                message.error(response.data.message)
            }
        } catch (error) {
            dispatach(HideLoading());
            message.error(error.message)
        }
    }
    const onFinish = async (values) => {
        try {
            const temptech = values?.technologies?.split(",") || []
            values.technologies=temptech
            dispatach(showLoading())
            let response 

            if(selectedItemForEdit){
                response= await axios.post("https://avish-portfolio.onrender.com/api/portfolio/update-project", {...values,_id:selectedItemForEdit._id});

            }else{
                response= await axios.post("https://avish-portfolio.onrender.com/api/portfolio/add-project", values);

            }
            dispatach(HideLoading())
            if(response.data.success){
                message.success(response.data.message)
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
                dispatach(HideLoading());
                dispatach(ReloadData(true));
                form.resetFields();

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
                Add Project
            </button>

        </div>
        <div className='grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1'>
        {projects.map((project)=>(
            <div className='shadow border p-5 border-gray-400 flex flex-col gap-5'>
                <h1 className='text-primary text-xl font-bold'>{project.title}</h1>
                <hr/>
                <img src={project.image} alt='' className='h-60 w-80' />
                <h1>{project.description}</h1>
                <div className='flex justify-end gap-5 mt-5'>
                    <button className='bg-primary text-white px-5 py-2 ' 
                    onClick={()=>{
                        setSelectedItemForEdit(project);
                        setShowAddEditModal(true);
                        setType('edit');
                    }}>Edit</button>
                    <button className='bg-red-500 text-white px-5 py-2 ' 
                    onClick={()=>{
                        onDelete(project)
                    }}>Delete</button>
                </div>
                </div>
        ))}
        </div>
                   {
                    (type==='add' || selectedItemForEdit) 
                    &&
                    <Modal visible={showAddEditModal}
                    title={selectedItemForEdit ? "Edit project" : "Add project"}
                    footer={null}
                    onCancel={()=>
                    {setShowAddEditModal(false)
                    setSelectedItemForEdit(null)}}>
                        
                        <Form form={form} layout='verticle' onFinish={onFinish} 
                        initialValues={{...selectedItemForEdit,
                        technologies:selectedItemForEdit?.technologies?.join(" , "),}||{}}>
                            <Form.Item name='title' label='Title'>
                                <input placeholder="Title" />
                            </Form.Item>
                            <Form.Item name='image' label='Image URL'>
                                <input placeholder="Image" />
                            </Form.Item>
                            <Form.Item name='description' label='Description'>
                                <input placeholder="Description" />
                            </Form.Item>
                            <Form.Item name='link' label='Link'>
                                <textarea placeholder="Link" />
                            </Form.Item>
                            <Form.Item name='technologies' label='Technologies'>
                                <textarea placeholder="Technologies" />
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
                   }
    </div>
    
  )
}

export default AdminProjects
