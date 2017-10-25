import React from 'react';
import '../css/login.css'
import Register from './Register';
import SignIn from './SignIn';


export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        //render nothing if the prop show is false
        if(!this.props.show){
            return null;
        }
        return (
            <div className="backdrop">
                <div className="modal">
                    <form>
                        <h2>Sign in</h2>
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
                    {this.props.children}
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

