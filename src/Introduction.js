import React from 'react'

function Introduction() {
    const me = require("./me.jpg").default
    
    return (
        <div id='introduction-container'>
            <h1 style={{color: '#605d74'}} id='hi-message'> Hi, I'm Nazar Yaremko</h1>
            <h2 style={{color: '#f9f6fa'}} id='hi-description'> I am an aspiring software engineer with passion for science. Throughout last 3 years of college I have lived and worked in five different countries while being a full-time student and pursuing majors in Computational and Natural Sciences. For the first half of my journey, I have been working towards a career in biology research. However, after taking a few coding classes, I quickly realized that my true passion lies in software engineering. I am truly excited to bring to the table the combination of critical thinking and problem solving skills I developed while working on research and software engineering projects. </h2>
            <div id='img-me'> <img style={{height:'250px', borderRadius: '5%', border: 'solid #605d74'}} src={me} alt='Picture of me'/> </div>
        </div>
    )
}

export default Introduction