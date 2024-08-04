import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import Banner from "./components/Banner";
import Qualification from "./components/Qualification";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App-container">
      <NavigationBar />
      <Banner />
      <Qualification />
      <Experience />
    </div>
  );
}

export default App;
