import React from 'react';
import '../css/login.css'




export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            passwordValue: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({nameValue: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({passwordValue: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.nameValue);
        alert('A password was submitted: ' + this.state.passwordValue);
        event.preventDefault();
    }


    render() {
        //render nothing if the prop show is false
        if(!this.props.show){
            return null;
        }
        return (
            <div className="backdrop">
                <div className="LogInModal">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Sign in</h1>
                        <label>
                          Email or Username:
                            <input type="text" name="name" placeholder="Your name.." value={this.state.nameValue} onChange={this.handleNameChange}/>
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password"   placeholder="Your password.." value={this.state.passwordValue} onChange={this.handlePasswordChange}/>
                        </label>
                        <input type="submit" value="Sign in" className="submit"   />
                    </form>

                  <div className="btn-exit">
                    <button  className="btn-close" onClick={this.props.onClose}>
                        X
                    </button>
                  </div>
                </div>
            </div>


        );
    }
}

