import React /*, {useContext}*/ from 'react'
import Principal from  '../Components/Principal/Principal';
import HoraAtencion from '../Components/HoraAtencion/HoraAtencion';
import Informacion from '../Components/Informacion/Informacion';
import Footer from "../Components/Footer/Footer"

const Home = () => {

    return (
        <>
            <Principal />
            <HoraAtencion />
            <Informacion />
            <Footer />           
        </>
    )
}

export default Home
