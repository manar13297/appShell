import React, {Fragment, useEffect, useState} from "react";
import './App.css';
import Footer from './components/Footer/Footer'
import Header from "./components/Header/Header";
import AuthApp from "./components/MFs/AuthApp";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import DashboardApp from "./components/MFs/DashboardApp";
import {loadMicrofrontend} from "./utils/loadMicrofrontend";
import ConnectToLinkedinApp from "./components/MFs/ConnectToLinkedinApp";
import connectToLinkedinApp from "./components/MFs/ConnectToLinkedinApp";

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(!!localStorage.getItem('authToken'));
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsSignedIn(false);
        window.location.href = "/";
    };

    const handleSignIn = () => {
        setIsSignedIn(true);
    };
    useEffect(() => {
        if (isSignedIn) {
            console.log("User is signed in ")
        }
    }, [isSignedIn]);
    const handleLinkedinConnect = () => {
        return connectToLinkedinApp;
    };

    return (
        <Router>
            <Fragment>
                {isSignedIn && <Header isSignedIn={isSignedIn} onSignOut={handleLogout} ></Header>}
                <Routes>
                    <Route path={"/"} element={isSignedIn ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />} />
                    <Route path={"/auth"} element={!isSignedIn ? <AuthApp onSignIn={handleSignIn} /> : <Navigate to="/" />} />
                    <Route path={"/dashboard"} element={isSignedIn ? <DashboardApp onLinkedinConnect={handleLinkedinConnect}/> : <Navigate to="/" />} />
                    <Route path={"/linkedin"} element={isSignedIn ? <ConnectToLinkedinApp/> : <Navigate to="/" />} />

                </Routes>
                <Footer isSignedIn={isSignedIn} onSignOut={handleLogout} text="&#169; 2024, Keiken Digital solutions" imageUrl="../assets/logo.png"></Footer>
            </Fragment>
        </Router>
    )
};

export default App;