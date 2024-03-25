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

    const handleUsernameChange = (e) => {
        setUser(prevUser => ({ ...prevUser, username: e.target.value }));
    };

    const handlePasswordChange = (e) => {
        setUser(prevUser => ({ ...prevUser, password: e.target.value }));
    };
    const dispatch=useDispatch();
    const login = async () =>{

        try {
            dispatch(showLoading());
            const response=await axios.post("/api/portfolio/admin-login",user);
            dispatch(HideLoading());
            if(response.data.success){
                message.success(response.data.message)
                localStorage.setitem("token",response.data);
                window.location.href="/admin";
            }else{
                message.error(response.data.error)
            }
        } catch (error) {
            message.error(error.message);
        }
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col'>
            <h1 className='text-2xl'>Admin Login</h1>
            <hr/>
            <label htmlFor="username">Username:</label>
            <input placeholder="Username" id="username" type='text' value={user.username} onChange={handleUsernameChange} />
            <label htmlFor="password">Password:</label>
            <input placeholder="Password" id="password" type='password' value={user.password} onChange={handlePasswordChange} />
            <button className='bg-primary text-white p-2 ' onClick={login}> LogIn</button>
        </div>
        </div>
    );
}

export default Login;
