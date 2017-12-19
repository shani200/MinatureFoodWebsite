import React from 'react';
import WebsiteCommonService from '../../controller/WebsiteCommonService';
import NotificationSystem from 'react-notification-system';
import '../css/shoppingCart.css'

/*import ProductTable from './ProductTable';*/



export default class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.WebsiteCommonService = new WebsiteCommonService();
        this.state={
            galleryArray: this.WebsiteCommonService.galleryItemArr
        };
        this.removeItem = this.removeItem.bind(this);
        this._addNotification = this._addNotification.bind(this);
      //  this.handleOnClickDelete = this._handleOnClickDelete.bind(this);
    }

    componentDidMount(){
        localStorage.removeItem("cart");
    }


    _addNotification(event){
        event.preventDefault();
        this.props.notification.addNotification({
            message: 'Item deleted',
            level: 'success'
        });
    }

    renderCart(){
        let listItems;
        let productsStored = JSON.parse(localStorage.getItem("cart"));
        if(!productsStored || !productsStored.length){
            return(
                <div className="emptyCart">
                    <div>Your shopping cart is empty,</div>
                    <div>but it doesn't have to be.</div>
                </div>);
        }
        else {

                listItems = productsStored.map((product, i) =>
                (
                <div className="cartProduct">

                    {this.renderProduct(productsStored[i].id , i)}
                </div>
                 )
                );}
       return listItems;

    }

    // onClick={()=>{ this.removeItem() ; this._addNotification()}}

    renderProduct(index, indexInModal){
        let productsStored = JSON.parse(localStorage.getItem("cart"));
        const classes = `indexInModal_${indexInModal} btn-remove`;
        return(
            <div className="cartDisplay">
                <span className="cartImage"><img className="imageProduct" src={this.state.galleryArray[index].image}/></span>
                <span className="cartTitle">{this.state.galleryArray[index].title}</span>
                <span className="cartQuantity">{`Quantity: ${productsStored[indexInModal].amount}`}</span>
                <span className="cartPrice">Price:{this.state.galleryArray[index].price}$</span>

                <div className="btn-remove-cart">
                    <button className={classes}  onClick={this.removeItem}>
                        Remove
                    </button>
                </div>
            </div>
        );
    }

  /*  _handleOnClickDelete(event){
        this.removeItem(event);
        this._addNotification(event);
    }*/

    removeItem(event){
         let products = JSON.parse(localStorage.getItem("cart"));
        let indexInModal = event.target.classList[0].split('_')[1];
        products.splice(indexInModal, 1);
        localStorage.setItem('cart', JSON.stringify(products));
        this._addNotification(event);
        this.forceUpdate();
    }




    renderTotalPrice(){
        let price=0;
        let productsStored = JSON.parse(localStorage.getItem("cart"));
        if(!productsStored || !productsStored.length){
            return(
               undefined
            )
        }
        else{productsStored.map((product,i) =>
            (
               price += this.state.galleryArray[productsStored[i].id].price * [productsStored[i].amount]
            )
        );}
            let strPrice = JSON.stringify(price);
            let dot = strPrice.indexOf('.');
            if(dot !== -1){
                let decimal = strPrice.substr(0 , dot);
                let remainder = strPrice.substr(dot, dot+1);
                return(
                    <div className="price-zone">
                        <span>{`Total: ${decimal}${remainder}$`}</span>
                    </div>
                );}
              else{
                return(
                <div className="price-zone">
                    <span>{`Total: ${strPrice}$`}</span>
                </div>
            );
        }
    }


    render() {
        //render nothing if the prop show is false
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="cartBackdrop">
                <div className="cartModal">
                    <div className="cartProducts">
                    {this.renderCart()}
                    </div>
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
