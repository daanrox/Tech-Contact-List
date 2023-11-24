import React, { createContext, useState } from "react";
import { api } from "../services";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  user_id: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  contacts: IContact[];
}

interface iRegisterFormData {
  name: string,
  email: string,
  password: string,
  phone: string
}


export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  userRegister: (formData: iRegisterFormData) => Promise<void>; 
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const userRegister = async (formData: iRegisterFormData) =>{
    try{
      const {data} = await api.post('users', formData)
      if(data){
        toast.success("Registro efetuado com sucesso")
      }
    }
    catch (error){
      const currentError = error as AxiosError<string>
      toast.error(currentError.message)
    }
  }


  return (
    <UserContext.Provider value={{ user, setUser, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};


