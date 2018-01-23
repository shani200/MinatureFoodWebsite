import React from 'react';
import LogInMobile from './LogInMobile';
import ShoppingCart from './ShoppingCart';
import '../css/navbarMobile.css'
import RegisterMobile from "./RegisterMobile";


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isOpen: false,
            isOpenRegister: false,
            isShoppingCartOpen: false
        };
        this.toggleSignIn = this.toggleSignIn.bind(this);
        this.StayOpenSignIn = this.StayOpenSignIn.bind(this);
        this.toggleRegister = this.toggleRegister.bind(this);
        this.StayOpenRegister = this.StayOpenRegister.bind(this);
        this.toggleShoppingCart = this.toggleShoppingCart.bind(this);
        this.getAuthors = this.getAuthors.bind(this);
    }

    toggleSignIn(){
        this.setState({isOpen: !this.state.isOpen});
    }

    StayOpenSignIn(){
        this.setState({isOpen: open});
    }

    toggleRegister(){
        this.setState({isOpenRegister: !this.state.isOpenRegister});
    }

    StayOpenRegister(){
        this.setState({isOpenRegister: open});
    }

    toggleShoppingCart() {
        this.setState({isShoppingCartOpen: !this.state.isShoppingCartOpen});
    }

    getAuthors (authors) {
        this.props.getAuthors(authors);
    }


    render() {
        return (
            <div className="nav-bar-header-mobile">
                <div className="login-mobile">
                    <span>Hi! </span>
                    <button className="signIn-mobile-button" onClick={this.toggleSignIn}>
                        Sign in
                    </button>
                    <LogInMobile show={this.state.isOpen}
                           onClose={this.toggleSignIn}
                           onOpen={this.StayOpenSignIn}
                           notification={this.props.notification}
                           getAuthors={this.getAuthors}>
                    </LogInMobile>
                    <span> or </span>
                    <button className="register-mobile-button" onClick={this.toggleRegister}>
                        Register
                    </button>
                    <RegisterMobile show={this.state.isOpenRegister}
                              onClose={this.toggleRegister}
                              onOpen={this.StayOpenRegister}
                              notification={this.props.notification}>
                    </RegisterMobile>

                </div>
                <div className="shopping-cart">
                    <button className="shopping-button" onClick={this.toggleShoppingCart}>
                        <img src={'http://findicons.com/files/icons/1700/2d/512/cart.png'} width="200" height="100" alt="shopping-cart" className="img-cart-mobile"  />
                    </button>
                    <ShoppingCart show={this.state.isShoppingCartOpen}
                                  onClose={this.toggleShoppingCart}
                                  notification={this.props.notification}>
                    </ShoppingCart>
                </div>
            </div>
        );
    }
}
