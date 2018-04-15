import React from 'react';
import './ProjectCard.css';

const ProjectCard = props =>(
    <div className = 'card'>
        <img src={props.image} className='projectImage' alt="props.name"/>
        <div className= 'textDiv'>
            <h4><a className='pageLink' href={props.url}> {props.name}</a></h4>
            <p className='pageText'>{props.description}</p>
        </div>
    </div>
)

export default ProjectCard