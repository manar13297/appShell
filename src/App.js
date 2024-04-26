import React, {Fragment, useEffect, useState} from "react";
import './App.css';
import Footer from './components/Footer/Footer'
import Header from "./components/Header/Header";
const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(true);
    const handleLogout = () => {
        setIsSignedIn(false);
    };
    useEffect(() => {
        if (isSignedIn) {
            console.log("User is signed in ")
        }
    }, [isSignedIn]);
    return <Fragment>
        {isSignedIn && <Header isSignedIn={isSignedIn} onSignOut={handleLogout} ></Header>}
        <Footer isSignedIn={isSignedIn} onSignOut={handleLogout} text="&#169; 2024, Keiken Digital solutions" imageUrl="../assets/logo.png"></Footer>
           </Fragment>
    };

export default App;