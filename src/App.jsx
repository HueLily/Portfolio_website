import './App.css'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Leadership from './components/Leadership'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Qualification from './components/Qualification'

function App() {

  return (
    <div className="App-container">
      <Navbar />
      <Banner />
      <Qualification />
      <Experience />
      <Project />
      <Leadership />
      <Contact />
    </div>
  )
}


export default App
