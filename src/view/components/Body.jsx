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
         <div>
          <NavBar />
         <Product />
         </div>    
        );
    }
}
