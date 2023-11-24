import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export type PageType = 'login' | 'register' | 'dashboard' | 'home';

export type NavigationFunction = () => void;

export interface IPage {
    page: PageType;
}

export interface IPanelProviderProps {
  children: React.ReactNode;
}

export interface IPanelContext {
  page: IPage | null;
  setPage: React.Dispatch<React.SetStateAction<IPage>>;
  goToLogin: NavigationFunction;
  goToRegister: NavigationFunction;
  logout: NavigationFunction
}

export const PanelContext = createContext({} as IPanelContext);

export const PanelProvider = ({ children }: IPanelProviderProps) => {
  const [page, setPage] = useState<IPage>({page: 'home'});

  const navigate = useNavigate()

  const goToLogin: NavigationFunction = ()  =>{
    setPage({ page: 'login' })
    navigate('/login')
}

const goToRegister: NavigationFunction = () =>{
    setPage({ page: 'register' })
    navigate('/register')
}

const logout : NavigationFunction = () =>{
  localStorage.removeItem('token')
  setPage({page: 'home'})
  navigate('/')
}

  return (
    <PanelContext.Provider value={{ page, setPage, goToLogin , goToRegister, logout}}>
      {children}
    </PanelContext.Provider>
  );
};


