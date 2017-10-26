import React from 'react';
import '../css/register.css'

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
            <div className="RegisterBackdrop">
                <div className="RegisterModal">

                    <form>
                        <h2>Register</h2>
                        <label>
                            First Name:
                            <input type="text" name="first-name" />
                        </label>
                        <label>
                            Email:
                            <input type="text" name="email" />
                        </label>
                        <label>
                            Password:
                            <input type="text" name="password" />
                        </label>
                        <label>
                            Confirm Password:
                            <input type="text" name="confirm-password" />
                        </label>
                        <input type="submit" value="Register" className="register"/>
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

