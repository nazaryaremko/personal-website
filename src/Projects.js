import React, { useState } from 'react';
import ProjectTab from './ProjectTab.js'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function Projects() {
    const [project, changeProject] = useState(0)

    const WeatherApp = require("./WeatherApp.png").default
    const CVMaker = require("./CVMaker.png").default
    const MemoryCard = require("./MemoryCard.png").default
    const TaskTracking = require("./TaskTracking.png").default
    const TicTacToe = require("./TicTacToe.png").default

    let sources = [WeatherApp, CVMaker, MemoryCard, TaskTracking, TicTacToe]
    let names = ['Weather App', 'A CV Making App', 'Harry Potter Theme Memory Card Game', 'Task Tracking App', 'Tic Tac Toe game']
    let lives = ["https://nazaryaremko.github.io/weather-app/", "https://nazaryaremko.github.io/cv-application/", "https://nazaryaremko.github.io/memory-card-game/", 'https://nazaryaremko.github.io/todo-list/', "https://nazaryaremko.github.io/tic-tac-toe/"]
    let githubs = ["https://github.com/nazaryaremko/weather-app", "https://github.com/nazaryaremko/cv-application", "https://github.com/nazaryaremko/memory-card-game", "https://github.com/nazaryaremko/todo-list", "https://github.com/nazaryaremko/tic-tac-toe"]
    
    function next() {
        if (project == sources.length - 1) {
            changeProject(prevProject => 0)
        } else {
            changeProject(prevProject => prevProject + 1)
        }
    }

    function prev() {
        if (project == 0) {
            changeProject(prevProject => sources.length-1)
        } else {
            changeProject(prevProject => prevProject - 1)
        }
    }
      

    return (
        <div>
        <h2 id='project-move' style={{color: '#605d74', padding: '20px', fontSize:'40px'}} > Projects </h2>
        <hr id='hr2'/>
        <div style = {{display: 'flex', justifyContent: 'center', color: '#f9f6fa', fontSize: '25px'}}> {names[project]} </div>
        <br/>
        <div id='project-container'>
            <div id='project-tab' > <ProjectTab source={sources[project]}/> </div>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prev} />
            <FaArrowAltCircleRight className='right-arrow' onClick={next} />
        </div>
        <div id='live-git-container'>
            <a id='live' href={lives[project]}> <button> Live </button> </a>
            <a id='github' href={githubs[project]}> <button> GitHub </button> </a>
        </div>
        </div>
    )
}
export default Projects