import React from 'react';
import NotificationSystem from 'react-notification-system';
import 'whatwg-fetch';
import WebsiteCommonService from '../../controller/WebsiteCommonService';
import '../css/header.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.WebsiteCommonService = new WebsiteCommonService();
        this.state = {authors: false};
        this._renderAuthors = this._renderAuthors.bind(this);
       // this.addNotification =this.WebsiteCommonService._addNotification;
        this._notificationSystem = null;
        this._addNotification = this._addNotification.bind(this);
        this._createFetch = this.WebsiteCommonService.createFetch;
    }

    componentDidMount() {
      this._notificationSystem = this.refs.notificationSystem;
    }



    _addNotification(event){
        event.preventDefault();
        this._notificationSystem.addNotification({
            message: 'Notification message',
            level: 'success'
        });
    }


    componentWillMount() {
        //const ul = document.getElementById('authors');
        this._createFetch();
    }

    _renderAuthors () {
        let listItems = undefined;
        if (this.state.authors) {
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
                <div className="Notification">
                <button className="notification_btn" onClick={this._addNotification}>Add notification</button>
                <NotificationSystem ref="notificationSystem" />
                </div>
           </div>
            
        );
    }
}