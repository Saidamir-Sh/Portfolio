import React  from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { AnimatePresence, motion} from 'framer-motion';
import { BoxLoading } from 'react-loadingg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
function App() {
  function SkillsPage() {
    return (
      <div>
        <BoxLoading speed='0.6' color='#ba311f' size="large"/>
        <Skills />
        <Navbar />
      </div>
    )
  }
  function HomePage() {
    return (
      <div>
        <BoxLoading speed='0.6' color='#ba311f' size="large" />
        <Home />
        <Navbar />
      </div>
    )
  }
  function AboutPage() {
    return (
      <div>
        <BoxLoading speed='0.6' color='#ba311f' size="large"/>
        <About />
        <Navbar />
      </div>
    )
  }
  function ProjectsPage() {
    return (
      <div>
        <BoxLoading speed='0.6' color='#ba311f' size="large"/>
        <Projects />
        <Navbar />
      </div>
    )
  }
  function ContactPage() {
    return (
      <div>
        <BoxLoading speed='0.6' color='#ba311f' size="large"/>
        <Contact />
        <Navbar />
      </div>
    )
  }
  const location = useLocation();

  return (
    
    <div className="App" style={{overflowX: "hidden"}}>
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.path}>
        <Route path='/about' component={AboutPage}></Route>
        <Route path='/skills' component={SkillsPage}></Route>
        <Route path='/projects' component={ProjectsPage}></Route>
        <Route path='/contact' component={ContactPage}></Route>
        <Route path='/' component={HomePage}></Route>
      </Switch>
      </AnimatePresence>
    </div>
   
   
  );
}

export default App;
