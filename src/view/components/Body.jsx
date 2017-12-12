import React from 'react';
import NavBar from './NavBar';
import Checkout from './Checkout';
import Product from './Product';
import '../css/body.css';


export default class Body extends React.Component {
    constructor(props) {
        super(props);
    }






    render() {
        return(
         <div className="body-container">
            <NavBar notification={this.props.notification}/>
            <Checkout/>
            <div className="explain">
                Hi,I'm Shani welcome to my website.<br/>
                I love to make miniatures out of polymer clay, especially minature food.<br/>
                These is my creations.
            </div>
            <Product notification={this.props.notification}/>
        </div>
        );
    }
}
