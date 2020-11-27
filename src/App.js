import React from 'react'
import './App.css'


import Welcome from './components/welcome';
import Navbar from './components/navbar'
import Hire from './components/hireme'
import Skills from './components/skills'
import Project from './components/projects'
import Contact from './components/contact'

function App(){
    return(
        <div>
            <Navbar />
            <Welcome/>
            <Skills/>
            <Project/>
            <Hire/>
            <Contact/>
        </div>
    )

}

export default App;