import React from 'react';
import '../css/product.css'
import GalleryItem from "./GalleryItem";
import ProductDisplay from './ProductDisplay.jsx'
import birthday_cake from '../pictures/birthday_cake.jpg';
import burn_oven_glove from '../pictures/burn_oven_glove.jpg';
import blue_set from '../pictures/blue_set.jpg';
import breads from '../pictures/breads.jpg';
import blueberry_cake from '../pictures/blueberry_cake.jpg';
import croissant from '../pictures/croissant.jpg';
import donuts from '../pictures/donuts.jpg';
import eclair from '../pictures/eclair.jpg';
import colors_croissant from '../pictures/colors_croissant.jpg';
import chocolate_ice_cream from '../pictures/chocolate_ice_cream.jpg';
import ice_plant from '../pictures/ice_plant.jpg';
import cookies from '../pictures/cookies.jpg';
import ice_cream_box from '../pictures/ice_cream_box.jpg';
import jar_of_sweets from '../pictures/jar_of_sweets.jpg';
import macaroon_clips from '../pictures/macaroon_clips.jpg';
import ice_creams from '../pictures/ice_creams.jpg';
import mermaid_pusheen from '../pictures/mermaid_pusheen.jpg';
import marshmallow from '../pictures/marshmallow.jpg';
import mini_cookies from '../pictures/mini_cookies.jpg';
import oven_glove from '../pictures/oven_glove.jpg';
import pink_cake from '../pictures/pink_cake.jpg';
import baking_scene from '../pictures/baking_scene.jpg';
import pink_ice_cream from '../pictures/pink_ice_cream.jpg';
import plants from '../pictures/plants.jpg';
import pusheen_cookies_set from '../pictures/pusheen_cookies_set.jpg';
import pusheen_cookies from '../pictures/pusheen_cookies.jpg';
import yellow_set from '../pictures/yellow_set.jpg';



export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen: false,
            isOpenIndex: 0,
            galleryItemArr: [
                    {
                        title: 'Confetti Birthday Cake',
                        price: 15.90,
                        desc: {
                            Type: 'Handmade item',
                            Material: 'polymer clay',
                            Usage: 'Gift wrapping and message available'
                        },
                        image: birthday_cake
                    },
                    {
                        title: 'Brown & White Oven Glove',
                        price: 11.90,
                        desc: {
                            Type: 'Handmade item',
                            Material: 'polymer clay',
                            Usage: 'Gift wrapping and message available'
                        },
                        image: burn_oven_glove
                    },
                    {
                        title: 'Twisted Ring Chocolate Cookies',
                        price: 7.90,
                        desc: {
                            Type: 'Handmade item',
                            Material: 'polymer clay',
                            Usage: 'Gift wrapping and message available'
                        },
                        image: cookies
                    },
                   {
                    title: 'Bread Loaves',
                    price: 12.00,
                    desc: {
                           Type: 'Handmade item',
                           Material: 'polymer clay',
                           Usage: 'Gift wrapping and message available'
                    },
                    image: breads
                   },
                   {
                    title: 'Blue Planner & Ice Cream & Croissant',
                    price: 15.90,
                    desc: {
                           Type: 'Handmade item',
                           Material: 'polymer clay',
                           Usage: 'Gift wrapping and message available'
                     },
                    image: blue_set
                   },
                   {
                    title: 'Blueberry Cake',
                    price: 13.90,
                    desc: {
                           Type: 'Handmade item',
                           Material: 'polymer clay',
                           Usage: 'Gift wrapping and message available'
                       },
                    image: blueberry_cake
                   },
                   {
                    title: 'Éclair',
                    price: 5.90,
                    desc: {
                           Type: 'Handmade item',
                           Material: 'polymer clay',
                           Usage: 'Gift wrapping and message available'
                       },
                    image: eclair
                   },
                   {
                    title: 'Mini Donuts',
                    price: 7.90,
                    desc: {
                           Type: 'Handmade item',
                           Material: 'polymer clay',
                           Usage: 'Gift wrapping and message available'
                       },
                    image: donuts
                   },
                   {
                    title: 'Mini Croissant',
                    price: 5.90,
                     desc: {
                           Type: 'Handmade item',
                           Material: 'polymer clay',
                           Usage: 'Gift wrapping and message available'
                       },
                    image: croissant
                   },
                   {
                    title: 'Ice Creams In Little Box',
                    price: 9.90,
                    desc: {
                           Type: 'Handmade item',
                           Material: 'polymer clay',
                           Usage: 'Gift wrapping and message available'
                       },
                    image: ice_cream_box
                   },
                {
                    title: 'Chocolate Ice Creams',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: chocolate_ice_cream
                },
                {
                    title: 'Croissant In Colors',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: colors_croissant
                },
                {
                    title: 'Yellow Planner & Ice Cream & Croissant',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: yellow_set
                },
                {
                    title: 'Ice Plant',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: ice_plant
                },
                {
                    title: 'Strawberry Chocolate And Vanilla Ice Creams',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: ice_creams
                },
                {
                    title: 'Jar Of Sweets',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: jar_of_sweets
                },
                {
                    title: 'Macaroon Clips',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: macaroon_clips
                },
                {
                    title: 'Marshmallow',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: marshmallow
                },
                {
                    title: 'Mermaid Pusheen',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: mermaid_pusheen
                },
                {
                    title: 'Mini Cookies',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: mini_cookies
                },
                {
                    title: 'Oven Glove',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: oven_glove
                },
                {
                    title: 'Ombré Pink Cake',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: pink_cake
                },
                {
                    title: 'Baking Cookies Scene',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: baking_scene
                },
                {
                    title: 'Ombré Pink Ice Cream',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: pink_ice_cream
                },
                {
                    title: 'Plants',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: plants
                },
                {
                    title: 'Pusheen Cookies Set',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: pusheen_cookies_set
                },
                {
                    title: 'Pusheen Cookies',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: pusheen_cookies
                },
                {
                    title: 'Pusheen Cookies',
                    price: 5.90,
                    desc: {
                        Type: 'Handmade item',
                        Material: 'polymer clay',
                        Usage: 'Gift wrapping and message available'
                    },
                    image: yellow_set
                }
            ]
        };
        this.toggleProduct=this.toggleProduct.bind(this);
        this._renderGalleryItems = this._renderGalleryItems.bind(this);
    }

    toggleProduct(event, i){
        let index= 0;
        index= i.substr(i.indexOf('$')+1);
        this.setState( {isOpenIndex: index});
        this.setState( {isOpen: !this.state.isOpen});
    }


    _renderGalleryItems () {
        let listItems = undefined;
        listItems = this.state.galleryItemArr.map((galleryItem,i) =>
                (
                    <div className="gallery" key={i} onClick={this.toggleProduct.bind(i)}>
                        <GalleryItem itemsArray={this.state.galleryItemArr}
                                     index={i}
                                     onClose={this.toggleProduct}>
                        </GalleryItem>
                    </div>
                )
            );
        return listItems;
    }

    render() {
        let iterator=0;
        return (
            <div className="gallery-display">
                {this._renderGalleryItems()}
                <ProductDisplay itemsArray={this.state.galleryItemArr}
                                index={this.state.isOpenIndex}
                                show={this.state.isOpen}
                                onClose={this.toggleProduct}>
                </ProductDisplay>
            </div>
        );
    }
}
