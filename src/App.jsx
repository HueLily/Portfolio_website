import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from './components/Banner'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Leadership from './components/Leadership'
import NavigationBar from './components/Navbar'
import Project from './components/Project'
import Qualification from './components/Qualification'

function App() {

  return (
    <div className="App-container">
      <NavigationBar />
      {/* <Banner />
      <Qualification />
      <Experience />
      <Project />
      <Leadership />
      <Contact /> */}
    </div>
  )
}


export default App
