import React from 'react';
import Checkout from './Checkout';
import CountItems from './CountItems';
/*import ProductTable from './ProductTable';*/



export default class ShoopingCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <CountItems />

            <Checkout/>
            </div>
        );
    }
}
/* <ProductTable products={PRODUCTS}/>   */