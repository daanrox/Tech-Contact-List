import { useContext, useEffect } from "react"
import { PanelContext } from "../../providers/PanelContext"
import { Container } from "../../components/Container"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export const Dashboard = () =>{

    const { setPage } = useContext(PanelContext)  
    

    useEffect(()=>{
        setPage({page: 'dashboard'})
    })

    return (
        <>
        <Container>
        <Header/>
        <h1>Dashboard</h1>
        </Container>
        <Footer/>
        </>
    )
}