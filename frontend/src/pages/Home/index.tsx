import { Container } from "../../components/Container"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { DescriptionHome, MainContainer, TitleHome } from "./style"
import iconMain from '../../assets/img/icon-transparent.png'
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { PanelContext } from "../../providers/PanelContext"

export const Home = () =>{
    const { setPage, goToLogin, goToRegister} = useContext(PanelContext)  
    const navigate = useNavigate();

    useEffect(()=>{
        setPage({page: 'home'})
        const token = localStorage.getItem('token')
        if(token){ 
            setPage({ page: 'dashboard' })
            navigate('/dashboard')
        }
    }, )

   

    return (
        <>
        <Container>
        <Header/>
        <MainContainer className="home__main">
            <div className="home__container">
                <section className="home__left">
                    <img className='home__icon' src={iconMain}/>
                </section>
                <section className="home__right">
                    <TitleHome>Organize, Conecte, Controle</TitleHome>
                    <DescriptionHome>Uma forma simples e eficaz de gerenciar todos os seus contatos em um só lugar.</DescriptionHome>
                    <div className="home__buttons">
                        <Button text='Login' onClick={goToLogin} />
                        <Button text='Cadastro' onClick={goToRegister}/>

                    </div>
                </section>
            </div>
        </MainContainer>
        </Container>

        <Footer/>
        </>
    )
}