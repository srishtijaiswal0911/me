import About from "./components/About";
import Contacts from "./components/Contacts";
import Tools from "./components/Tools";
import Tools2 from "./components/Tools2";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Work from "./components/Work"


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Work />
      <Portfolio />
      <Tools />
      <Tools2 />
      <Contacts />
      <SocialLinks />
    </div>
  );
}

export default App;
