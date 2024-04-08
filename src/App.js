import Header from "./components/Header";
import Body from "./components/Body";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Body />
        <Projects />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
