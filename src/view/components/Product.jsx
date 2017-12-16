import React from 'react';
import '../css/product.css'
import GalleryItem from "./GalleryItem";
import ProductDisplay from './ProductDisplay.jsx'
import WebsiteCommonService from '../../controller/WebsiteCommonService';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.WebsiteCommonService = new WebsiteCommonService();

        this.state={
            isOpen: false,
            isOpenIndex: 0,
            _galleryArr: this.WebsiteCommonService.galleryItemArr
        };
        this.toggleProduct=this.toggleProduct.bind(this);
        this._renderGalleryItems = this._renderGalleryItems.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.toggleProduct = this.toggleProduct.bind(this);
    }

    toggleProduct(event, i){
        let index;
        index= i.substr(i.indexOf('$')+1);
        this.setState( {isOpenIndex: index});
        this.setState( {isOpen: !this.state.isOpen});
    }

    closeModal() {
        this.setState( {isOpen: false});
    }

    _renderGalleryItems () {
        let listItems = undefined;
        listItems = this.state._galleryArr.map((galleryItem,i) =>
                (
                    <div className="gallery" key={i} onClick={this.toggleProduct.bind(i)}>
                        <GalleryItem itemsArray={this.state._galleryArr}
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
                <ProductDisplay itemsArray={this.state._galleryArr}
                                index={this.state.isOpenIndex}
                                show={this.state.isOpen}
                                onClose={this.toggleProduct}
                                notification={this.props.notification}
                               closeModal={this.closeModal}>
                </ProductDisplay>
            </div>
        );
    }
}
