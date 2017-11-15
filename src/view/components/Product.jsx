import React from 'react';



export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.image;
        this.description;
    }

    render() {
        return (
            <h2>Products</h2>
        );
    }
}
