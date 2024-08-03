import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import Banner from "./components/Banner";
import Qualification from "./components/Qualification";

function App() {
  return (
    <div className="App-container">
      <NavigationBar />
      <Banner />
      <Qualification />
    </div>
  );
}

export default App;
