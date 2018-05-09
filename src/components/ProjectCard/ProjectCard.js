import React from 'react';
import './ProjectCard.css';

const ProjectCard = props =>(
    <div className = 'card'>
        <div className = 'imageDiv'>
            <a href={props.url} target='_blank'><img src={props.image} className='projectImage' alt="props.name"/></a>
            <a href={props.github} target="_blank">
                    <img className='ghIcon'  
                    src='/assets/images/icons/gh-icon-sm.png' 
                    alt={props.github}/>
            </a>
        </div>
        <div className= 'textDiv'>
            <h2>
                <a className='cardLink' target="blank" href={props.url}>{props.name}</a>
            </h2>
            <p className='cardText'>{props.description}</p>
        </div>
        <div className='icons'>
            
        </div>
    </div>
)

export default ProjectCard;