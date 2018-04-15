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
                <div className='nameDiv'>
                <p className ='nameTag'> Name</p>
                <input className='nameInput'
                    value={this.state.name}
                    name='name'
                    onChange = {this.handleInputChange}
                    type = 'text'
                    placeholder='e.g. John Smith...'
                    required
                />
                </div>
                <div className = 'emailDiv'>
                <p className='emailTag'>Email</p>                
                <input className='emailInput'
                    value = {this.state.email}
                    name='_replyto'
                    onChange = {this.handleInputChange}
                    type= 'email'
                    placeholder='example@email.com'
                    required
                />
                </div>
                <div className = 'msgDiv'>
                <p className='msgTag'>Message</p>
                <textarea className ='msgInput'
                    value = {this.state.message}
                    name= 'message'
                    onChange = {this.handleInputChange}
                    type = 'text'
                    placeholder='Message me here...'
                    required
               />
               </div>     
                <input className='submitBtn' type ='submit' value = 'Send'/>
                </form>
                <div className = 'iconDiv'>

                </div>
            </div>
            </div>
        )// end of return
    } //end of render
} // end of class

export default Form;
