import React from 'react';
import '../css/login.css'




export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.value);
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
                            <input type="text" name="name"  placeholder="Your name.."  ref={(input) => this.input = input} />
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password"   placeholder="Your password.."/>
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

