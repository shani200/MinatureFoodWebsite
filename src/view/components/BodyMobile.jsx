import React from 'react';
import NavBarMobile from './NavBarMobile';
import ProductMobile from './ProductMobile';
import '../css/bodyMobile.css';


export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.getAuthors = this.getAuthors.bind(this);
    }

    getAuthors(authors) {
        // alert('1' + authors);
        this.props.getAuthors(authors);
    }

    render() {
        return(
            <div className="body-container-mobile">
                <NavBarMobile notification={this.props.notification}
                        getAuthors={this.getAuthors}
                />
                <ProductMobile notification={this.props.notification}/>
            </div>
        );
    }
}
