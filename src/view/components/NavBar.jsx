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
                <div className="flex-item"> <div className="login">Hi! Sign in or Register</div> </div>
                <div className="shopping-cart">
                    <span>Shooping cart</span>
                </div>
            </div>
        );
    }
}
