import React from 'react';

import Particle from "./components/elements/Particle";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import sr from './utils/setingsScrollReveal';

const App = () => {
    const [showButtonHeader, setShowButtonHeader] = React.useState(false);
    
    React.useEffect(() => {
        sr.reveal(".delaySmallReveal", { delay: 200 });
        sr.reveal(".delayMediumReveal", { delay: 300 });
        sr.reveal(".delayLargeReveal", { delay: 400 });
        sr.reveal(".delayExtraBigReveal", { delay: 600 });
        sr.reveal(".intervalCardReveal", { interval: 400 });
    }, []);

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