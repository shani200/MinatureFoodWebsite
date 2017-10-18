import React from 'react';
import NavBar from './NavBar';
import Product from './Product';
import '../css/body.css';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
    }
    
    

    render() {
        return (
         <div className="body-container">
          <NavBar />
          <div className="body-content">
               <img src={'https://i.pinimg.com/564x/12/19/cd/1219cdba2a62d4ae520de28d8d5a9f8b.jpg'} width="1000" height="300" alt="Cactus" className="img" />
               <div className="explain">Bla Bla Bla...</div>
           </div>
        </div>
        );
    }
}
