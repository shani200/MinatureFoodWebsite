import React from 'react';
import ProductDisplay from './ProductDisplay.jsx'
import '../css/product.css'
import GalleryItem from "./GalleryItem";
import Cactus from '../pictures/cactus.jpg';
import flower2 from '../pictures/cactus.jpg';
import iceCream from '../pictures/cactus.jpg';


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
        let index =2;
        return (
            <div className="gallery-display">

                <div className="gallery" onClick={this.toggleProduct}>

                    <div className="image">1</div>

                    <div className="desc">Add a description of the image here</div>

                    <ProductDisplay show={this.state.isOpen}
                                    onClose={this.toggleProduct}>
                    </ProductDisplay>
                </div>

                <div className="gallery">
                    <GalleryItem index={index++}
                                 show={this.state.isOpen}
                                 onClose={this.toggleProduct}>
                    </GalleryItem>
                </div>

                <div className="gallery">
                    <GalleryItem index={index++}
                                 show={this.state.isOpen}
                                 onClose={this.toggleProduct}>
                    </GalleryItem>
                </div>

                <div className="gallery">
                    <GalleryItem index={index++}
                                 show={this.state.isOpen}
                                 onClose={this.toggleProduct}>
                    </GalleryItem>
                </div>


            </div>
        );
    }
}
