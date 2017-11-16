import React from 'react';
import ProductDisplay from './ProductDisplay.jsx'
import '../css/product.css'



export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen: false
        };
        this.toggleProduct=this.toggleProduct.bind(this);
    }

    toggleProduct(){
        this.setState( {isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <div className="gallery-display">
                <div className="gallery">
                    <a target="_blank" href="http://www.mako.co.il/">
                    <div className="image">1</div>

                     <div className="desc">Add a description of the image here</div>
                    </a>
                </div>

                <div className="gallery" onClick={this.toggleProduct}>

                    <div className="image">2</div>

                    <div className="desc">Add a description of the image here</div>

                    <ProductDisplay show={this.state.isOpen}
                                    onClose={this.toggleProduct}>
                    </ProductDisplay>
                </div>

                <div className="gallery">

                    <div className="image">3</div>

                            <div className="desc">Add a description of the image here</div>
                </div>

                <div className="gallery">

                    <div className="image">4</div>

                <div className="desc">Add a description of the image here</div>
                </div>
                <br/>
                <div className="gallery">

                    <div className="image">5</div>

                    <div className="desc">Add a description of the image here</div>
                </div>

                <div className="gallery">

                    <div className="image">6</div>

                    <div className="desc">Add a description of the image here</div>
                </div>

                <div className="gallery">

                    <div className="image">7</div>

                    <div className="desc">Add a description of the image here</div>
                </div>

                <div className="gallery">

                    <div className="image">8</div>

                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
        );
    }
}
