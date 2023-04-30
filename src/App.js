
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import SpecialMenu from "./components/SpecialMenu/SpecialMenu";
import Chef from "./components/Chef/Chef";
import Intro from "./components/Intro/Intro";
import Laurels from "./components/Laurels/laurels";
import Open from "./components/FindUs/Findus";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
         <Navbar/>
         <Header/>
         <About/>
         <SpecialMenu/>
         <Chef/>
         <Intro/>
         <Laurels/>
         <Open />
         <Footer/>
    </div>
  );
}

export default App;
