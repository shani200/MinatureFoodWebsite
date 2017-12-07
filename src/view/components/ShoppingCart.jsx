import React from 'react';
import WebsiteCommonService from '../../controller/WebsiteCommonService';
import '../css/shoppingCart.css'

/*import ProductTable from './ProductTable';*/



export default class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.WebsiteCommonService = new WebsiteCommonService();
        this.state={
            galleryArray: this.WebsiteCommonService.galleryItemArr
        };


    }

    renderCart(){
        let listItems;
        let productsStored = JSON.parse(localStorage.getItem("cart"));
        //  localStorage.removeItem("cart");
        if(!productsStored){
            return(
                <div className="emptyCart">
                    <div>Your shopping cart is empty,</div>
                    <div>but it doesn't have to be.</div>
                </div>);
        }
        else{
        listItems = productsStored.map((product,i) =>
            (
                <div className="cartProducts" >

                    {this.renderProduct(productsStored[i])}
                </div>
            )
        );}
       return listItems;
    }

    renderProduct(index){
         return(
            <div className="cartDisplay">
                <span className="cartImage"> <img className="imageProduct" src={this.state.galleryArray[index].image}/> </span>
                <span className="cartTitle">{this.state.galleryArray[index].title}</span>
                <span className="cartQuantity">Quantity:1</span>
                <span className="cartPrice">Price:{this.state.galleryArray[index].price}$</span>

                <div className="btn-remove-cart">
                    <button className="btn-remove" /*onClick={this.removeItem(index)}*/>
                        Remove
                    </button>
                </div>
            </div>
        );
    }

    removeItem(i){
        alert(i);
         let products = JSON.parse(localStorage.getItem("cart"));
        products.splice(i, 1);
        localStorage.setItem('cart', JSON.stringify(products));
    }


    renderTotalPrice(){
        let price=0;
        let productsStored = JSON.parse(localStorage.getItem("cart"));
        if(!productsStored){
            return(
               undefined
            )
        }
        else{productsStored.map((product,i) =>
            (
               price += this.state.galleryArray[productsStored[i]].price
            )
        );
            return(
            <div className="price-zone">
                <span>{`Total: ${price}$`}</span>
            </div>
        );}

    }


    render() {
        //render nothing if the prop show is false
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="cartBackdrop">
                <div className="cartModal">
                    {this.renderCart()}
                    {this.renderTotalPrice()}
                    <div className="btn-exit-cart">
                        <button className="btn-close-cart" onClick={this.props.onClose}>
                            X
                        </button>
                    </div>

                </div>
            </div>


        );
    }
}
