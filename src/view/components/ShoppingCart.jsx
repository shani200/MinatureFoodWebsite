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
        let productsStored = JSON.parse(localStorage.getItem("cart"));
       let listItems;
        listItems = productsStored.map((product,i) =>
            (
                <div className="cartProducts" >

                    {this.renderProduct(productsStored[i])}
                </div>
            )
        );
       return listItems;

      //   let list;
      // list= this.renderProduct(productsStored[2]);
      // return list;
    }

    renderProduct(index){
        let productsStored = JSON.parse(localStorage.getItem("cart"));
        return(
            <div className="cartDisplay">
                <span className="cartImage"> <img className="imageProduct" src={this.state.galleryArray[index].image}/> </span>
                <span className="cartDesc">{this.state.galleryArray[index].title}</span>
                <span className="cartQuantity">1</span>
                <span className="cartPrice">{this.state.galleryArray[index].price}</span>


            </div>
        );


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
