import React from 'react';
import '../css/product.css'
import GalleryItem from "./GalleryItem";
import birhday_cake from '../pictures/birhday_cake.jpg';
import burn_oven_glove from '../pictures/burn_oven_glove.jpg';
import cookies from '../pictures/cookies.jpg';
import blue_set from '../pictures/blue_set.jpg';
import breads from '../pictures/breads.jpg';
import blueberry_cake from '../pictures/blueberry_cake.jpg';
import croissant from '../pictures/croissant.jpg';
import donuts from '../pictures/donuts.jpg';
import eclair from '../pictures/eclair.jpg';
import ice_cream_box from '../pictures/ice_cream_box.jpg';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen: false,
            galleryItemArr: [
                    {
                        title: 'Confetti Birthday Cake',
                        price: 15.90,
                        desc: 'Handmade item\n '+
                        'Material: polymer clay\n' +
                        ' Gift wrapping and message available',
                        image: birhday_cake
                    },
                    {
                        title: 'Brown & White Oven Glove',
                        price: 11.90,
                        desc: 'Handmade item\n '+
                        'Material: polymer clay\n' +
                        ' Gift wrapping and message available',
                        image: burn_oven_glove
                    },
                    {
                        title: 'Cookies',
                        price: 7.90,
                        desc: 'Handmade item\n '+
                        'Material: polymer clay\n' +
                        ' Gift wrapping and message available',
                        image: cookies
                    },
                   {
                    title: 'Bread Loaves',
                    price: 12.00,
                    desc: 'Handmade item\n '+
                    'Material: polymer clay\n' +
                    ' Gift wrapping and message available',
                    image: breads
                   },
                   {
                    title: 'Blue Planner & ice cream & croissant',
                    price: 15.90,
                    desc: 'Handmade item\n '+
                    'Material: polymer clay\n' +
                    ' Gift wrapping and message available',
                    image: blue_set
                   },
                   {
                    title: 'Blueberry Cake',
                    price: 13.90,
                    desc: 'Handmade item\n '+
                    'Material: polymer clay\n' +
                    ' Gift wrapping and message available',
                    image: blueberry_cake
                   },
                   {
                    title: 'mini croissant',
                    price: 5.90,
                    desc: 'Handmade item\n '+
                    'Material: polymer clay\n' +
                    ' Gift wrapping and message available',
                    image: croissant
                   },
                   {
                    title: 'mini Donuts',
                    price: 7.90,
                    desc: 'Handmade item\n '+
                    'Material: polymer clay\n' +
                    ' Gift wrapping and message available',
                    image: donuts
                   },
                   {
                    title: 'Eclair',
                    price: 5.90,
                    desc: 'Handmade item\n '+
                    'Material: polymer clay\n' +
                    ' Gift wrapping and message available',
                    image: eclair
                   },
                   {
                    title: 'Ice Creams In Little Box',
                    price: 9.90,
                    desc: 'Handmade item\n '+
                    'Material: polymer clay\n' +
                    ' Gift wrapping and message available',
                    image: ice_cream_box
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
