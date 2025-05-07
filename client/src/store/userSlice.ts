import axios from 'axios';
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { toast } from 'react-toastify';

type User = {
    fullname:string;
    email:string;
    contact:number;
    address:string;
    city:string;
    country:string;
    profilePicture:string;
    admin:boolean;
    isVerified:boolean;
}

type UserState = {
    user: User | null;
    isAuthenticated: boolean;
    isCheckingAuth: boolean;
    loading: boolean;
    signup:(data:any) => Promise<void>;
     
}

const API_END_POINT = 'http://localhost:5173/api/v1/user'
axios.defaults.withCredentials = true;

export const userStore = create<UserState>()(persist((set)=>({
    user: null,
    isAuthenticated: false,
    isCheckingAuth: true,
    loading: false,

    signup: async(data:any)=>{
        try {
            set({loading: true});
            const response = await axios.post(`${API_END_POINT}/resitser`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
 
            if(response.data.success){
                toast.success(response.data.message);
                set({loading:false, user:response.data.user, isAuthenticated: true});
            }
        } catch (error) {
             toast.error(error.data.message);
            set({ loading: false });
        }
    }
}),
{
    name: "user-name",
    storage: createJSONStorage(()=> localStorage)
}   
))