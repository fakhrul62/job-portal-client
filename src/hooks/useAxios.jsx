import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/",
    withCredentials: true,
});
const useAxios = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        axiosInstance.interceptors.response.use(res=>{
            return res;
        }, err=> {
            console.log('error caught in interceptor', err);
            if(err.status === 401 || err.status === 403){
                console.log('users need to logout');
                logOut()
                .then(res=>{console.log('logged out'); navigate('/login')})
                .catch(err=> console.log(err.message))
            }
            return Promise.reject(err);
        })
    }, [])
    return axiosInstance;
};

export default useAxios;