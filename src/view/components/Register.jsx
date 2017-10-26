import React from 'react';
import '../css/login.css'
import Register from './Register';
import SignIn from './SignIn';


export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
    }

    /*
        <div className="modal-header">
                           <div>  <a classID="register-tab" href="#" aria-label="Registration form" role="tab"
                                     aria-controls="registration-form" aria-selected="false" >Register</a>
                           </div>
                           <span>/</span>
                           <div>  <a classID="sign-in-tab" href="#" aria-label="Sign In form" role="tab"
                                     aria-controls="signin-form" aria-selected="true" >Sign In </a>
                           </div>
                       </div>
     */

    render() {
        //render nothing if the prop show is false
        if(!this.props.show){
            return null;
        }
        return (
            <div className="backdrop">
                <div className="modal">

                    <form>
                        <h2>Register</h2>
                        <label>
                            Email or Username:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Password:
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Sign in" className="submit"/>
                    </form>

                    <div className="footer">
                        <button  className="btn-close" onClick={this.props.onClose}>
                            X
                        </button>
                    </div>
                </div>
            </div>


        );
    }
}

