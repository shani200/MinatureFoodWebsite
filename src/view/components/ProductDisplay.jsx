import React from 'react';
import '../css/productDisplay.css'



export default class ProductDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.renderProducts=this.renderProducts.bind(this);
        this.renderOverview=this.renderOverview.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.onExit = this.onExit.bind(this);
        this._addNotification = this._addNotification.bind(this);
        this.handleOnClickAddToCart = this._handleOnClickAddToCart.bind(this);
    }




    _addNotification(event){
        event.preventDefault();
        this.props.notification.addNotification({
            message: 'Item added',
            level: 'success'
        });
    }

    renderOverview(){
        let list = [];
        let item = this.props.itemsArray[this.props.index];
         for (let i=0; i< item.desc.length; i++) {
              list.push(<li> {`${item.desc[i].key} : ${item.desc[i].value}`}</li>);
          }
        return list;
    }

    addToCart() {
            // let product =this.props.itemsArray[this.props.index];
            // localStorage.setItem("lastname", "Smith");
            let item = this.props.itemsArray[this.props.index];
            let productsStored = JSON.parse(localStorage.getItem("cart"));
            if (!productsStored) {
                let products = [];
                products[0] = {
                    id: item.id,
                    amount: 3
                };
                localStorage.setItem("cart", JSON.stringify(products));

            } else {
                let product = {id:item.id, amount:3};
                productsStored.push(product);
                // productsStored.push(this.state.value);
                localStorage.setItem("cart", JSON.stringify(productsStored));
            }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    _handleOnClickAddToCart(event) {
        this.addToCart();
        this._addNotification(event);
        this.onExit()
    }

    onExit(){
       this.props.closeModal();
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
                                   value={this.state.value}
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

