import React from 'react'
// import '../App.css'


import java from '../media/java.png'
import html from '../media/html.png'
import css from '../media/css.png'
import javascript from '../media/javascript.png'
import react from '../media/react.png'
import python from '../media/python.jpg'

const skill = [java, html, css, javascript, react, python]

export default function Skills(){

    return(
        <div className="skills" id="skills">
            <h4 className="heading">my proficiencies are:</h4>
            <div className="skill">
                {
                    skill.map((skill,pos)=>(
                        <img src={skill} alt="skill" key={pos}/>
                 ))
                } 
            </div>   
        </div>

    )
}



 