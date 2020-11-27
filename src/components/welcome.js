import React from 'react'
// import '../App.css'
import linkedin from '../media/linkedin.png'
import git from '../media/git.png'

export default function Welcome(){
return( 
    <div>    
        <div id="welcome">
            <h2>Hey I am Manju</h2>
            <h3><i>a web developer</i></h3>
            <p style={{margin:"20px"}}>
                <a style={{marginRight:"30px"}} className="image" title="Linkedin Prolife" href="https://www.linkedin.com/in/manjunatha-m-b1647a109/" target="_blank">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a className="image" title="GitHub Prolife" href="https://github.com/manju14m" target="_blank">
                    <img src={git} alt="git" />
                </a>
            </p>
            <div className="seemore">
                <a href="#skills"><h6>See More</h6>
            <i className="fa fa-angle-double-down" aria-hidden="true"></i></a>
            </div>

        </div>
    </div>

)

}