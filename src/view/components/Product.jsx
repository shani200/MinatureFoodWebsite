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
            isOpen: false,
            galleryItemArr: [
                    {
                        title: 'title1',
                        price: 45.90,
                        desc: 'dec1',
                        image: Cactus
                    },
                    {
                        title: 'title2',
                        price: 41.90,
                        desc: 'dec2',
                        image: flower2
                    },
                    {
                        title: 'title3',
                        price: 45.90,
                        desc: 'dec3',
                        image: iceCream
                    }
                ]
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
                    <GalleryItem itemsArray={this.state.galleryItemArr}
                                 index={index++}
                                 show={this.state.isOpen}
                                 onClose={this.toggleProduct}>
                    </GalleryItem>
                </div>

                <div className="gallery" onClick={this.toggleProduct}>
                    <GalleryItem itemsArray={this.state.galleryItemArr}
                                 index={index++}
                                 show={this.state.isOpen}
                                 onClose={this.toggleProduct}>
                    </GalleryItem>
                </div>

                <div className="gallery" onClick={this.toggleProduct}>
                    <GalleryItem itemsArray={this.state.galleryItemArr}
                                 index={index++}
                                 show={this.state.isOpen}
                                 onClose={this.toggleProduct}>
                    </GalleryItem>
                </div>

                <div className="gallery" onClick={this.toggleProduct}>
                    <GalleryItem itemsArray={this.state.galleryItemArr}
                                 index={index++}
                                 show={this.state.isOpen}
                                 onClose={this.toggleProduct}>
                    </GalleryItem>
                </div>


            </div>
        );
    }
}
