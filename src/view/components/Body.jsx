import React from 'react';
import NavBar from './NavBar';
import Checkout from './Checkout';
import '../css/body.css';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
    }
    
    /* <img src={'https://i.pinimg.com/564x/12/19/cd/1219cdba2a62d4ae520de28d8d5a9f8b.jpg'} width="1000" height="300" alt="Cactus" className="img" />*/
  _loadImages(){

  }


    render() {
        return (
         <div className="body-container">
          <NavBar />
           <Checkout/>
          <div className="explain">
                   Hi,I'm Shani welcome to my website.<br/>
                   I love to make miniatures out of polymer clay, especially minature food.<br/>
                   These is my creations.
           </div>
           {this._loadImages()}
        </div>
        );
    }
}
