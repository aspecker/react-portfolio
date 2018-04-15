import React, { Component } from 'react';
import projectList from '../data/projects.json'
import ProjectCard from '../components/ProjectCard'
import '../components/ProjectCard/ProjectCard.css'

class Portfolio extends Component {
    state = {
        projects: projectList
    };

    render () {
        return(
            <div className='container'>
                {this.state.projects.map(project=>(
                    <ProjectCard 
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        image={project.image}
                        url={project.url}
                        github={project.github}
                        description={project.description}
                    />
                ))}
            </div>
            
        )// end of return
    }// end of render
}

export default Portfolio;