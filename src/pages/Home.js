import React from 'react'
import Principal from  '../Components/Principal/Principal';
import HoraAtencion from '../Components/HoraAtencion/HoraAtencion';
import Informacion from '../Components/Informacion/Informacion';
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar"

const Home = () => {

    return (
        <>
            <Navbar />
            <Principal />
            <HoraAtencion />
            <Informacion />
            <Footer />           
        </>
    )
}

export default Home
