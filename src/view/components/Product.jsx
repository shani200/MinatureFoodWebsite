import React from 'react';
import '../css/product.css'
import GalleryItem from "./GalleryItem";
import ProductDisplay from './ProductDisplay.jsx'
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
        return (
            <div className="gallery-display">
                {this._renderGalleryItems()}
                <ProductDisplay itemsArray={this.state._galleryArr}
                                index={this.state.isOpenIndex}
                                show={this.state.isOpen}
                                onClose={this.toggleProduct}
                                notification={this.props.notification}
                                closeModal={this.closeModal}
                                stayOpenModal={this.openModal}
                                onRequestClose={this.toggleProduct}
                                shouldCloseOnOverlayClick={true}>
                </ProductDisplay>
            </div>
        );
    }
}
