import React from "react"
import {Link} from 'react-scroll';

function Header() {

    return (
        <div style={{color: '#605d74', backgroundColor: '#E6C0E9'}} id='header-container'> 
            <h3 id='home-btn'> <Link  to='introduction-container' spy={true} smooth={true}>Home</Link> </h3>
            <h3 id='skills-btn'> <Link  to="skills-move" spy={true} smooth={true}>Skills</Link></h3>
            <h3 id='projects-btn'> <Link  to="project-move" spy={true} smooth={true}>Projects</Link></h3>
            <h3 id='contact-btn'> <Link  to="contact-container" spy={true} smooth={true}>Contact</Link></h3>
        </div>
    )
}
export default Header