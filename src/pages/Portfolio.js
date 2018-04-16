import React, { Component } from 'react';
import projectList from '../data/projects.json'
import ProjectCard from '../components/ProjectCard'
import '../components/ProjectCard/ProjectCard.css'

class Portfolio extends Component {
    state = {
        projects: projectList
    };

    // sortByTwo = (projects) => projects.reduce((accumulator,project)=>{
    //         if (accumulator[accumulator.length-1].length!==2){
    //             let sliceArr = accumulator.slice(0,accumulator.length-2)
    //             let endArr = accumulator[accumulator.length -1];
    //             let addArr = [...endArr,project]
    //             return [...sliceArr, addArr]
    //         }
    //          else{
    //             return [...accumulator,[project]] 
    //         }
    // }, [[]] )

    render () {
        // let array = this.sortByTwo(this.state.projects);
        // console.log(array);

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