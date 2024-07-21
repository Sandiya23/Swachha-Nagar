import Contact from "../components/Contact"
import Gallery from "../components/gallery"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import Whyjoin from "../components/Whyjoin"


function HomePage(){
    return(<>
        <Navbar/>

        <Home/>

        <Gallery/>

        <Whyjoin/>

        <Contact/>
        
  
    </>)
}
export default HomePage