import React from 'react';
import Register from './Register';
import SignIn from './SignIn';


export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
           register:"false"
        };
        
    }

    render() {
        return (
          <div>   
         if(!this.state.register){
            <Register />
         }
         else <SignIn />
        </div> 
        );
    }
}
