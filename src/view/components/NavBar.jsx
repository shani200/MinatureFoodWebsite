import React from 'react';
import LogIn from './LogIn';
import ShoopingCart from './ShoopingCart';
import '../css/navbar.css'
import Register from "./Register";


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isOpen: false,
            isOpenRegister: false
        };
        this.toggleSignIn = this.toggleSignIn.bind(this);
        this.toggleRegister = this.toggleRegister.bind(this);
    }

    toggleSignIn(){
     this.setState({isOpen: !this.state.isOpen});
   }

    toggleRegister(){
        this.setState({isOpenRegister: !this.state.isOpenRegister});
    }



    render() {
        return (
            <div className="nav-bar-header">
                <div className="login">
                         <span>Hi! </span>
                        <button className="signIn-button" onClick={this.toggleSignIn}>
                            Sign in
                        </button>
                         <LogIn show={this.state.isOpen}
                           onClose={this.toggleSignIn}>
                         </LogIn>
                        <span> or </span>
                        <button className="register-button" onClick={this.toggleRegister}>
                           Register
                        </button>
                    <Register show={this.state.isOpenRegister}
                              onClose={this.toggleRegister}>
                    </Register>

                </div>
                <div className="shopping-cart">
                    <img src={'http://findicons.com/files/icons/1700/2d/512/cart.png'} width="200" height="100" alt="shopping-cart" className="img-cart" />
                </div>
            </div>
        );
    }
}
