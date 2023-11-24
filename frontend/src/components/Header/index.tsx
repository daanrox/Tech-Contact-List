import { StyledHeader } from "./style";
import logoHeader from "../../assets/img/logo-white.png";
import { Button } from "../Button";
import { PanelContext } from "../../providers/PanelContext";
import { useContext } from "react";

export const Header = () => {
  const { page,  logout, goToLogin, goToRegister } = useContext(PanelContext)  


const calcButtonText = (currentPage: string) => {
  if (currentPage === 'login') {
    return 'Cadastre-se';
  } else if (currentPage === 'register') {
    return 'Login';
  } else if (currentPage === 'home'){
    return 'Login'
  } else if (currentPage === 'dashboard') {
    return 'Sair';
  } else {
    return 'Inicio';
  }
}


const calcButtonFunction = (currentPage: string) =>{
  if (currentPage === 'login') {
    return goToRegister;
  } else if (currentPage === 'register') {
    return goToLogin;
  } else if (currentPage === 'home'){
    return goToLogin
  } else if (currentPage === 'dashboard') {
    return logout;
  } else {
    return logout;
  }
}



  return (
    <>
      <StyledHeader>
        <div className="header__container">
          <img className="header__logo" src={logoHeader} />
          <Button text={calcButtonText(page!.page)} onClick={calcButtonFunction(page!.page)} />
        </div>
      </StyledHeader>
    </>
  );
};


