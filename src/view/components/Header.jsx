import React from 'react';
import 'whatwg-fetch';
import '../css/header.css'
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {authors: false
        };
        this._renderAuthors = this._renderAuthors.bind(this);
        this._notificationSystem = null;
        // this._createFetch = websiteCommonService.createFetch;
    }


    componentWillMount() {

        // websiteCommonService.createFetch().then((response) => {
        //     this.setState({authors: response});
        //       });

       //this._createFetch();

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.authors) {
            this.setState({authors: nextProps.authors});
        }
    }

    //&& this.props.isLogIn
//   this.state.userSignedIn = this.setState({userSignedIn: this.props.isLogIn});
    _renderAuthors () {
        let listItems;
        if (this.state.authors ) {
                 listItems = this.state.authors.map((author,i) =>
                     (
                         <div className="user_container" key={i}>
                             <img  src={author.picture.medium} alt="user's-image" className="user_img"/>
                             <span className="user_name">{`Hello ${author.name.first} ${author.name.last}`}</span>
                         </div>
                     )
                 );
             }
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