import React, {Component} from 'react';
import './Skillbar.css';
import SkillList from '../../data/skills.json'

class Skillbar extends Component {
    state = {
        skills: SkillList
    }

    render () {
        return(
            <div className = 'skillDiv'>
                {this.state.skills.map(skill=>(
                    <img 
                    src={skill.image} 
                    alt={skill.skill}
                    key={skill.id}
                    className = 'skillImg'
                    />
                ))}
            </div>
        )// end of return
    }// end of render
}// end of class

export default Skillbar;