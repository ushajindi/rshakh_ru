import $api from "./Api";
import axios, {AxiosResponse} from 'axios';
import {AuthResponse} from "./response/userResponse";
import api from "./Api";
import {appendFile} from "fs";

export class ApiService {
    static async login(email:string,password:string):Promise<AxiosResponse<AxiosResponse>>{
        return api.post('auth/login',{email,password})
    }
    static async getUser(token:string,userid:string){
        return api.get(`users/user/${userid}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    }

    static async getChats(token:string,userid:string){
        return api.get(`chat/${userid}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    }
    static async Register(email:string,username:string,password:string){
        return api.post('auth/registration',{email,username,password})

    }

    static async updateUserAvatar(formData:any,token:string|null){
        return api.put("/users/update",formData,{
            headers:{
                Authorization:`Bearer ${token}`,
                ContentType:'multipart/form-data'
            }
            }
        )
    }


    static async findAllAnotherUsers(token:string){
        return api.get("/users/all",{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        })
    }
}