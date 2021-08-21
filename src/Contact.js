import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div id='contact-container'>
            <h2 style={{color: '#E6C0E9', textAlign: 'left' , fontSize:'40px'}}> Contact </h2>
            <hr id='hr3'/>
            <div><h4 style={{color: '#f9f6fa'}} data-aos="fade-left"> You can send me an email at: </h4></div>
            <div><h3 style={{color: '#E6C0E9', fontSize:'30px'}} data-aos="zoom-in"> yaremko.nazar@uni.minerva.edu</h3></div>
            <div><h4 style={{color: '#f9f6fa'}} data-aos="fade-right"> Or reach me through social media: </h4></div>
            <div><a style={{color: '#E6C0E9', fontSize:'30px'}} href="https://www.linkedin.com/in/nazar-yaremko-56656715b/" data-aos="fade-up">LinkedIn</a></div>
            <div><a style={{color: '#E6C0E9', fontSize:'30px'}} href="https://github.com/nazaryaremko" data-aos="fade-up"> GitHub</a></div>
            <div><a style={{color: '#E6C0E9', fontSize:'30px'}} href="https://www.facebook.com/profile.php?id=100009218523751" data-aos="fade-up"> Facebook </a></div>
            <div><h4 style={{color: '#f9f6fa'}} data-aos="fade-left"> The most recent version of my resume is available at:</h4></div>
            <div><a style={{color: '#E6C0E9', fontSize:'30px'}} href='https://drive.google.com/file/d/1PudrpQe3mbPUHiUFR8jexey2Y42NOmWA/view?usp=sharing' data-aos="fade-up"> Resume </a></div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}
export default Contact