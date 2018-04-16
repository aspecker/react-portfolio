import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    state = {
        name: "",
        _replyto: "",
        message: "",
    };

    handleInputChange = event =>{
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        this.setState({
            name: "",
            _replyto: "",
            message: ""
        });
    };

    render () {
        return (
            <div className = 'container'>
            <div className = 'formBox'>
                <form className = 'form' action='https://formspree.io/speckerwebdev@gmail.com' method="POST">
                <p className ='nameTag'> Name</p>
                <input className='nameInput'
                    value={this.state.name}
                    name='name'
                    onChange = {this.handleInputChange}
                    type = 'text'
                    placeholder='e.g. John Smith...'
                    required
                />
                <p className='emailTag'>Email</p>                
                <input className='emailInput'
                    value = {this.state.email}
                    name='_replyto'
                    onChange = {this.handleInputChange}
                    type= 'email'
                    placeholder='example@email.com'
                    required
                />
                <p className='msgTag'>Message</p>
                <textarea className ='msgInput'
                    value = {this.state.message}
                    name= 'message'
                    onChange = {this.handleInputChange}
                    type = 'text'
                    placeholder='Message me here...'
                    required
               />
                <input className='submitBtn' type ='submit' value = 'Send'/>
                <div className = 'aboutDiv'>
                    <h1>Adam Specker</h1>
                    <h3>Full Stack Web Developer</h3>
                    <p></p>
                </div>
                </form>
            </div>

            </div>
        )// end of return
    } //end of render
} // end of class

export default Form;
