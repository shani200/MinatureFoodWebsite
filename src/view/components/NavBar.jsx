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
            <div className="nav-bar">
             <div className="nav-bar-header">
              <LogIn />
              <ShoopingCart/>
             </div>
            </div>
        );
    }
}
