import { useContext, useEffect } from "react";
import { PanelContext } from "../../providers/PanelContext";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {jwtDecode} from "jwt-decode";
import { UserContext } from "../../providers/UserContext";
import { UserDetails } from "../../components/UserDetails";
import { ContactList } from "../../components/ContactList";
import { api } from "../../services";

export interface DecodedToken {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

export const Dashboard: React.FC = () => {
  const { setPage } = useContext(PanelContext);
  const { logout, getContactList, contactsList , getUsersDetails } = useContext(UserContext);


  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
  
        const decodedToken = jwtDecode<DecodedToken>(token);
        const userId = decodedToken.sub; 
        console.log(contactsList)
        getUsersDetails(userId)
        getContactList(userId);
      } catch (error: unknown) {
        if( error instanceof Error){
            console.error("Erro ao decodificar o token:", error.message);
            logout()
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  useEffect(() => {
    setPage({ page: "dashboard" });
  }, [setPage]);

  return (
    <>
      <Container>
        <Header />
        <UserDetails/>
        <ContactList/>
      </Container>
      <Footer />
    </>
  );
};


