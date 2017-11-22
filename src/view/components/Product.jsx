import React from 'react';
import '../css/product.css'
import GalleryItem from "./GalleryItem";
import Cactus from '../pictures/cactus.jpg';
import flower2 from '../pictures/flower2.jpg';
import iceCream from '../pictures/iceCream.jpg';


export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen: false,
            galleryItemArr: [
                    {
                        title: 'title1',
                        price: 15.90,
                        desc: 'Handmade item\n '+
                        'Material: polymer clay\n' +
                        ' Gift wrapping and message available',
                        image: Cactus
                    },
                    {
                        title: 'title2',
                        price: 21.90,
                        desc: 'Handmade item\n '+
                        'Material: polymer clay\n' +
                        ' Gift wrapping and message available',
                        image: flower2
                    },
                    {
                        title: 'title3',
                        price: 25.90,
                        desc: 'Handmade item\n '+
                        'Material: polymer clay\n' +
                        ' Gift wrapping and message available',
                        image: iceCream
                    }
                ]
        };
        this.toggleProduct=this.toggleProduct.bind(this);
        this._renderGalleryItems = this._renderGalleryItems.bind(this);
    }

    toggleProduct(){
        this.setState( {isOpen: !this.state.isOpen});
    }


    _renderGalleryItems () {
        let listItems = undefined;
        let iterator=0;
        listItems = this.state.galleryItemArr.map((galleryItem,i) =>
                (
                    <div className="gallery" key={i} onClick={this.toggleProduct}>
                        <GalleryItem itemsArray={this.state.galleryItemArr}
                                     index={iterator++}
                                     show={this.state.isOpen}
                                     onClose={this.toggleProduct}>
                        </GalleryItem>
                    </div>
                )
            );
        return listItems;
    }

    render() {
        return (
            <div className="gallery-display">
                {this._renderGalleryItems()}
            </div>
        );
    }
}
