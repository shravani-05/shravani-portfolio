/**
 * @copyright 2024 Shravani Sawant
 * @license Apache-2.0
 */

//components 
import Header from "./components/Header";
import Hero from "./components/hero";
import { About } from "./components/About";
import Skills from "./components/Skills";
const App = () => {
    return (
        <>
        <Header/>
        <main>
            <Hero/>
            <About/>
            <Skills/>
            {/* <Project/>
            <Contactme/> */}
        </main>
        </>
    )
}

export default App;