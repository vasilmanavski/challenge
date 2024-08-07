import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../src/components/Login";
import Registration from "../src/components/Registration";
import Home from "../src/components/Home";
import Header from "../src/components/Header";
import ApplicationContextProvider from "../src/context/ApplicationContextProvider";

const App: React.FC = () => {

    return (
        <ApplicationContextProvider>
            <Router>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </main>
            </Router>
        </ApplicationContextProvider>
    );
};

export default App;