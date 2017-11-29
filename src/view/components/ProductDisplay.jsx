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
    }

    renderOverview(){
        let list=undefined;
         for (let key in this.props.itemsArray[this.props.index].desc) {
            if (this.props.itemsArray[this.props.index].desc.hasOwnProperty(key)) {

                list=(<span> {`${key} : ${this.props.itemsArray[this.props.index].desc[key]}`}</span>);
            }
        }
      return list;
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    renderProducts(){
        //render nothing if the prop show is false
        if(!this.props.show){
            return null;
        }

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
                            <button  className="btn-cart" >
                                Add to cart
                            </button>
                        </div>

                        <div className="view">
                            <div className="overview">Overview</div>
                            <span className="symbol">~</span>{this.renderOverview()}
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

