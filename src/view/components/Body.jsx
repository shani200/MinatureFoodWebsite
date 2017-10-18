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
         <div className="body-content">
          <NavBar />
           <div class="explanation">
            
                     <div class="content">Bla Bla Bla...</div>
           </div>
        </div>
        );
    }
}
