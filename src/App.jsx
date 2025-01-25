/**
 * @copyright 2024 Shravani Sawant
 * @license Apache-2.0
 */


import { ReactLenis, useLenis } from 'lenis/react'

//components 
import Header from "./components/Header";
import Hero from "./components/Hero";
import { About } from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";
import Work2 from './components/Work';
import './index.css';


const App = () => {
    return (
        <ReactLenis root>
        <Header/>
        <main>
            <Hero/>
            <About/>
            <Skills/>
            {/* <Work/> */}
            <Work2/>
            <Contactme/>
            <Footer/>
        </main>
        </ReactLenis>
    )
}

export default App;