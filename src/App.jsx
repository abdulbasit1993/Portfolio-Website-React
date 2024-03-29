import { useState } from "react";
import Menu from "./components/menu/Menu";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import About from "./components/about/About";
import ContactBanner from "./components/contactBanner/ContactBanner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <About />
        <ContactBanner />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
