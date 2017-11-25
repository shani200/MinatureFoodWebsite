import React from 'react';
import '../css/galleryItem.css';
import '../css/product.css';



export default class GalleryItem extends React.Component {
    constructor(props) {
        super(props);
        this.renderItems=this.renderItems.bind(this);
    }




    renderItems(){
        return(
            <div >
                <img className="image" src={this.props.itemsArray[this.props.index].image}/>
                <div className="desc">{this.props.itemsArray[this.props.index].title}</div>
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