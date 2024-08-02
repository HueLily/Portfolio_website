import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App-container">
      <NavigationBar />
      <Banner />
    </div>
  );
}

export default App;
