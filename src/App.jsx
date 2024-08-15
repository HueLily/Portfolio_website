import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import Banner from "./components/Banner";
import Qualification from "./components/Qualification";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App-container">
      <NavigationBar />
      <Banner />
      <Qualification />
      <Experience />
      <Project />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
