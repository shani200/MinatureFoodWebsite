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
                    {this.props.children}
                  <div className="footer">
                    <button  className="btn-close" onClick={this.props.onClose}>
                        Close
                    </button>
                  </div>
                </div>
            </div>


        );
    }
}

