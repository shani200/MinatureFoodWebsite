import React from 'react';
import 'whatwg-fetch';
import WebsiteCommonService from '../../controller/WebsiteCommonService';
import '../css/header.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.WebsiteCommonService = new WebsiteCommonService();
        this.state = {authors: false,
            userSignedIn: false
        };
        this._renderAuthors = this._renderAuthors.bind(this);
        this._notificationSystem = null;
        this._createFetch = this.WebsiteCommonService.createFetch;
    }


    componentWillMount() {
        this._createFetch();
    }

    _renderAuthors () {
        let listItems;
        if (this.state.authors ) {
             // if(this.state.userSignedIn){
                 listItems = this.state.authors.map((author,i) =>
                     (
                         <div className="user_container" key={i}>
                             <img  src={author.picture.medium} alt="user's-image" className="user_img"/>
                             <span className="user_name">{`Hello ${author.name.first} ${author.name.last}`}</span>
                         </div>
                     )
                 );
             }
            // }
        return listItems;
    }

    render() {
        return (

            <div className="flex-container">
               <div className="user">{this._renderAuthors()}</div>
               <div className="name"> Sample </div>

           </div>
            
        );
    }
}