/**
 * @copyright 2024 Shravani Sawant
 * @license Apache-2.0
 */

//components 
import Header from "./components/Header";
import Hero from "./components/hero";
import { About } from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";
import Work2 from "./Work2";
const App = () => {
    return (
        <>
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
        </>
    )
}

export default App;