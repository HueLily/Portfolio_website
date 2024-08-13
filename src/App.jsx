import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import Banner from "./components/Banner";
import Qualification from "./components/Qualification";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";

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
    </div>
  );
}

export default App;
