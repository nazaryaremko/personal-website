import './App.css';
import Header from './Header'
import Introduction from './Introduction'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Contact from './Contact.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <Skills/>
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
