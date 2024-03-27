import { message } from 'antd';
import axios from 'axios';
import React from 'react';
import { HideLoading, showLoading } from '../../redux/rootslice';
import { useDispatch } from 'react-redux';

function Login() {
    const [user, setUser] = React.useState({
        username: "",
        password: ""
    });
    
    
    const dispatch=useDispatch();
    const login = async () =>{

        try {
            dispatch(showLoading());
            const response=await axios.post("/api/portfolio/admin-login",user);
            dispatch(HideLoading());
            if(response.data.success){
                message.success(response.data.message)
                localStorage.setItem("token",JSON.stringify(response.data));
                window.location.href="/admin";
            }else{
                message.error(response.data.error)
            }
        } catch (error) {
            message.error(error.message);
        }
    }

    return (
        <div className='flex justify-center items-center h-screen bg-primary'>
            <div className='w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col bg-white'>
            <h1 className='text-2xl'>Admin Login</h1>
            <hr/>
            <label htmlFor="username">Username:</label>
            <input placeholder="Username" id="username" type='text' value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} />
            <label htmlFor="password">Password:</label>
            <input placeholder="Password" id="password" type='password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} />
            <button className='bg-primary text-white p-2 ' onClick={login}> LogIn</button>
        </div>
        </div>
    );
}

export default Login;
