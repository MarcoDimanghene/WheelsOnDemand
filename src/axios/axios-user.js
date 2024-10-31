import axios from "axios";
import {BASE_URL} from "../utils/constants"


export const createUser = async (nombre, email, password) =>{
    try {
        const response = await axios.post(
            `${BASE_URL}auth/register`,
            {
                nombre,
                email,
                password
            });
            return response.data
    } catch (error) {
        console.log(error);
        return alert(error.response.data.errors[0].msg);
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(
            `${BASE_URL}auth/login`,
            {
                email, 
                password
            });
            return response.data
    } catch (error) {
        console.log(error)
        return alert(error.response.data.msg);
    }
}

export const verifyUser = async (email, code) => {
    try {
        const response = await axios.patch(`${BASE_URL}auth/verify`, { email, code });
        return response.data;
    } catch (error) {
        console.log(error)
        if (error.response && error.response.data && error.response.data.msg) {
            throw new Error(error.response.data.msg);
        } else {
            throw new Error("Error desconocido");
        }
    }
};
export const resendVerificationCode = async (email, code) => {
    try {
        const response = await axios.patch(`${BASE_URL}auth/verify`, { email, code });
        return response.data;
    } catch (error) {
        console.log(error);
        if (error.response && error.response.data && error.response.data.msg) {
            throw new Error(error.response.data.msg);
        } else {
            throw new Error("Error desconocido");
        }
    }
};

export const requestPasswordReset = async (email) =>{
    try {
        const response = await axios.post(`${BASE_URL}auth/requestpassword`, { email });
        return response.data;
    } catch (error) {
        console.log(error)
        if (error.response && error.response.data && error.response.data.msg) {
            throw new Error(error.response.data.msg);
        } else {
            throw new Error("Error desconocido");
        }
    }
}
export const resetPassword = async(email, resetCode, newPassword)=>{
    try {
        const response = await axios.post(`${BASE_URL}auth/resetpassword`, { email, resetCode, newPassword });
        return response.data;
    } catch (error) {
        console.log(error)
        
        if (error.response && error.response.data && error.response.data.msg) {
            throw new Error(error.response.data.errors[0].msg);
        }
        
    }
    
}

