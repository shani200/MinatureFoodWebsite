import React from 'react';
import Header from './Header';
import Body from './Body';
import Checkout from './Checkout';
import Footer from './Footer';
import '../css/layout.css'


export default class Layout extends  React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="mainScreen">
                <Checkout/>
                <Header/>
                <Body />
                <Footer  message={this.props.message} />
            </div>
        );
    }
}



