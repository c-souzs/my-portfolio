import React from 'react';

import Particle from "./components/elements/Particle";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
    const [showButtonHeader, setShowButtonHeader] = React.useState(false);
    
    return (
        <BrowserRouter>
            <Header showButtonHeader={showButtonHeader}/>
            <Particle />
            <Routes>
                <Route path="/" element={<Home setShowButtonHeader={setShowButtonHeader} />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;