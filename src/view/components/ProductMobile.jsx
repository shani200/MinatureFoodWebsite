import React from 'react';
import '../css/productMobile.css'
import GalleryItemMobile from "./GalleryItemMobile";
import ProductDisplayMobile from './ProductDisplayMobile.jsx'
import websiteCommonService from '../../controller/WebsiteCommonService';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen: false,
            isOpenIndex: 0,
            _galleryArr: websiteCommonService.galleryItemArr
        };
        this.toggleProduct=this.toggleProduct.bind(this);
        this._renderGalleryItems = this._renderGalleryItems.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
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

    openModal(){
        this.setState( {isOpen: true});
    }

    _renderGalleryItems () {
        let listItems;
        listItems = this.state._galleryArr.map((galleryItem,i) =>
            (
                <div className="gallery-mobile" key={i} onClick={this.toggleProduct.bind(i)}>
                    <GalleryItemMobile itemsArray={this.state._galleryArr}
                                 index={i}
                                 onClose={this.toggleProduct}>
                    </GalleryItemMobile>
                </div>
            )
        );
        return listItems;
    }

    render() {
        return (
            <div className="gallery-display">
                {this._renderGalleryItems()}
                <ProductDisplayMobile itemsArray={this.state._galleryArr}
                                index={this.state.isOpenIndex}
                                show={this.state.isOpen}
                                onClose={this.toggleProduct}
                                notification={this.props.notification}
                                closeModal={this.closeModal}
                                stayOpenModal={this.openModal}>
                </ProductDisplayMobile>
            </div>
        );
    }
}
