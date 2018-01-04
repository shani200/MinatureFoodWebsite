import React from 'react';
import WebsiteCommonService from '../../controller/WebsiteCommonService';
import '../css/productDisplay.css'



export default class ProductDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amountValue: '1'
        };
        this.WebsiteCommonService = new WebsiteCommonService();
        this._getLoaclStorage = this.WebsiteCommonService.getLocalStorage;
        this._setLoaclStorage = this.WebsiteCommonService.setLocalStorage;
        this.renderProducts=this.renderProducts.bind(this);
        this.renderOverview=this.renderOverview.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.onExit = this.onExit.bind(this);
        this.onStayOpenModal = this.onStayOpenModal.bind(this);
        this._addNotification = this._addNotification.bind(this);
        this.clearAmount = this.clearAmount.bind(this);
        this.isIdExists = this.isIdExists.bind(this);
        this.handleOnClickAddToCart = this._handleOnClickAddToCart.bind(this);

    }


    _addNotification(event,itemIsUpdate,amountExist){
        event.preventDefault();
        if(!amountExist && !itemIsUpdate ){
            this.props.notification.addNotification({
                message: 'you must enter a valid quantity',
                level: 'error',
                position: 'bl'
            });
        }
        if(itemIsUpdate && amountExist){
            this.props.notification.addNotification({
                message: "Item's amount updated",
                level: 'info',
                position: 'bl'
            });
        }
        if(!itemIsUpdate && amountExist){
            this.props.notification.addNotification({
                message: 'Item added',
                level: 'success',
                position: 'bl'
            });
        }
    }

    renderOverview(){
        let list = [];
        let item = this.props.itemsArray[this.props.index];
         for (let i=0; i< item.desc.length; i++) {
              list.push(<li> {`${item.desc[i].key} : ${item.desc[i].nameValue}`}</li>);
          }
        return list;
    }

    addToCart() {
        let item = this.props.itemsArray[this.props.index];
        let productsStored = JSON.parse(this._getLoaclStorage());
        let itemIsUpdate = false;
        let amount;
        let amountExist  = true;
        amount = this.state.amountValue;
        if(amount === '' || amount <= '0' || isNaN(amount)){
            amountExist = false;
            this._addNotification(event,itemIsUpdate,amountExist);
            this.onStayOpenModal();
            return undefined;
        }
        if (!productsStored  ){
            let products = [];
            products[0] = {
                id: item.id,
                amount: this.state.amountValue
            };
            this._setLoaclStorage(products);
            this._addNotification(event,itemIsUpdate,amountExist);
            this.onExit();
        } else {
            let product = {id: item.id, amount: this.state.amountValue};
            let oldAmount;
            let newAmount;
            let index;

            index = this.isIdExists(product.id, productsStored);

            if (index !== undefined) {
                oldAmount = productsStored[index].amount;
                newAmount = parseInt(oldAmount) + parseInt(product.amount);
                productsStored[index].amount = newAmount;
                itemIsUpdate = true;
            } else {
                productsStored.push(product)
            }
            this._addNotification(event,itemIsUpdate,amountExist);
            this._setLoaclStorage(productsStored);
            this.onExit();
        }
    }

    isIdExists(id, list){
        let index;
        list.map((listItem,i) =>
            {
                if (listItem.id === id)
                    index = i
            }

        );
        return index;
     }


    handleChange(event) {
        this.setState({amountValue: event.target.value});
    }

    _handleOnClickAddToCart() {
        this.addToCart();
       // this._addNotification(event);
        this.clearAmount();

    }

    clearAmount(){
        this.setState({amountValue: '1'});
    }

    onExit(){
       this.props.closeModal();
    }

    onStayOpenModal(){
        this.props.stayOpenModal();
}

    renderProducts(){
        //render nothing if the prop show is false
        if(!this.props.show){
            return null;
        }
        let divStyle = {
            listStyleType: 'upper-roman'
        };

        return(
            <div className="ProductBackdrop">
                <div className="ProductModal">
                    <img className="images" src={this.props.itemsArray[this.props.index].image}/>
                    <div className="description">

                        <div className="title">
                            {this.props.itemsArray[this.props.index].title}
                        </div>

                        <div className="price">
                            <span className="price-tag">price:</span>
                            {this.props.itemsArray[this.props.index].price}$
                        </div>

                        <div className="amount">
                            <span className="quantity">Quantity:</span>
                            <input type="text"
                                   value={this.state.amountValue}
                                   className="amount-box"
                                   onChange={this.handleChange}
                            />
                        </div>

                        <div className="cartBtn">
                            <button onClick={this.handleOnClickAddToCart} className="btn-cart" >
                                Add to cart
                            </button>

                        </div>

                        <div className="view">
                            <div className="overview">Overview</div>
                            <ul className="myUl" style={divStyle}>
                                {this.renderOverview()}
                            </ul>

                        </div>

                    </div>
                    <div className="btn-exit">
                        <button  className="btn-close" onClick={this.props.onClose}>
                            X
                        </button>
                    </div>

                </div>
            </div>
        );
    }


    render() {
        return (
            <div >
                {this.renderProducts()}
            </div>

        );


    }
}

