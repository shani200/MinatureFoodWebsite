import React from 'react';
import '../css/galleryItem.css';
import '../css/product.css';
import Cactus from '../pictures/cactus.jpg';
import flower2 from '../pictures/cactus.jpg';
import iceCream from '../pictures/cactus.jpg';
import ProductDisplay from "./ProductDisplay";

export default class GalleryItem extends React.Component {
    constructor(props) {
        super(props);
        this.renderItems=this.renderItems.bind(this);
        this.renderItems2=this.renderItems2.bind(this);
    }

    renderItems() {
        let listItems= undefined;
        let pictures = [
            <img src={Cactus}/>,
            <img src={flower2}/>,
            <img src={iceCream}/>
    ];

            listItems = pictures.map((author) =>
                (
                    <div >
                        <div className="image">5</div>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                )
            );
        return (listItems);
    }


    renderItems2(){

        return(
            <div >
                <div className="image">{this.props.index}</div>
                <div className="desc">Add a description of the image here</div>
                <ProductDisplay show={this.props.show}
                                onClose={this.props.onClose}>
                </ProductDisplay>
            </div>

        );
    }

    render() {
        return (
            <div >
                {this.renderItems2()}
            </div>

        );
    }
}