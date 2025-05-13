import { Outlet } from "react-router";
import Cover from "./fitur/for-home/cover";
import Header from "./fitur/for-home/header";
import Nav from "./fitur/for-home/nav";
import Navbar from "./fitur/for-home/nav-2";
import Footer from "./fitur/for-home/footer" 
import { useState } from "react";
const Layout = () => {

    const [genre, setGenre] = useState("");


    return (

        <>
            <Cover>
            <Header>
                <Nav setGenre={setGenre}/>
                <Navbar/>
            </Header>
            <Outlet context={{genre, setGenre}}/>         
            <Footer/>
            </Cover>
        </>
    )
}

export default Layout