import React from 'react';
import LogIn from './LogIn';
import ShoopingCart from './ShoopingCart';
import '../css/navbar.css'


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-bar-header">
                <div className="flex-item"> <div className="login"><button className="button ">Hi! Sign in or Register</button></div></div>
                <div className="shopping-cart">
                    <img src={'http://findicons.com/files/icons/1700/2d/512/cart.png'} width="200" height="100" alt="shopping-cart" className="img-cart" />
                </div>
            </div>
        );
    }
}
