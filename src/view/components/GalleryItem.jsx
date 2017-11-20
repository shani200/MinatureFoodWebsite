import React from 'react';
import ProductDisplay from './ProductDisplay.jsx'
import '../css/galleryItem.css';
import '../css/product.css';



export default class GalleryItem extends React.Component {
    constructor(props) {
        super(props);
        this.renderItems2=this.renderItems2.bind(this);
        this.renderItems=this.renderItems.bind(this);
    }

    renderItems2() {
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


    renderItems(){
        return(
            <div >
                <img className="image" src={this.props.itemsArray[1].image}/>
                <div className="desc">{this.props.itemsArray[1].desc}</div>
                <ProductDisplay itemsArray={this.props.itemsArray}
                                show={this.props.show}
                                onClose={this.props.onClose}>
                </ProductDisplay>
            </div>

        );
    }

    render() {
        return (
            <div >
                {this.renderItems()}
            </div>

        );
    }
}