import React from 'react';
import LogIn from './LogIn';
import ShoopingCart from './ShoopingCart';
import '../css/navbar.css'


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ isOpen: false};
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
     this.setState({isOpen: !this.state.isOpen});
   }



    render() {
        return (
            <div className="nav-bar-header">
                <div className="login">

                        <button className="signIn-button" onClick={this.toggleModal}>
                            Hi! Sign in or Register
                        </button>
                        <LogIn show={this.state.isOpen}
                               onClose={this.toggleModal}>
                            Here's some content for the modal
                        </LogIn>

                </div>
                <div className="shopping-cart">
                    <img src={'http://findicons.com/files/icons/1700/2d/512/cart.png'} width="200" height="100" alt="shopping-cart" className="img-cart" />
                </div>
            </div>
        );
    }
}
