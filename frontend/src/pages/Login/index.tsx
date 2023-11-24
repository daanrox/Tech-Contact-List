import { useEffect, useContext } from "react"
import { Container } from "../../components/Container"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { PanelContext } from "../../providers/PanelContext"

export const Login = () =>{
    const { setPage } = useContext(PanelContext)  
    

    useEffect(()=>{
        setPage({page: 'login'})
    })
    
    

    return (
        <>
        <Container>
            <Header/>



        </Container>
        <Footer/>
        </>
    )
}