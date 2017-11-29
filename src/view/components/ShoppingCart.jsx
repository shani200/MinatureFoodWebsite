import React from 'react';
import Checkout from './Checkout';
import CountItems from './CountItems';
/*import ProductTable from './ProductTable';*/



export default class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        //render nothing if the prop show is false
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="backdrop">
                <div className="LogInModal">
                    <form>
                        <h2>Sign in</h2>
                        <label>
                            Email or Username:
                            <input type="text" name="name"/>
                        </label>
                        <label>
                            Password:
                            <input type="text" name="password"/>
                        </label>
                        <input type="submit" value="Sign in" className="submit" />
                    </form>

                    <div className="footer">
                        <button className="btn-close" onClick={this.props.onClose}>
                            X
                        </button>
                    </div>
                </div>
            </div>


        );
    }
}
/* <ProductTable products={PRODUCTS}/>   */