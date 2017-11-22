import React from 'react';
import NotificationSystem from 'react-notification-system';
import 'whatwg-fetch';
import '../css/header.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {authors: false};
        this._renderAuthors = this._renderAuthors.bind(this);
        this._notificationSystem = null;
        this._addNotification = this._addNotification.bind(this);
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
        const url = 'https://randomuser.me/api/?results=1';
        let myThis=this;
        fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                myThis.setState({authors: data.results})
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    _renderAuthors () {
        let listItems = undefined;
        if (this.state.authors) {
            listItems = this.state.authors.map((author,i) =>
                (
                    <div key={i}>
                        <img src={author.picture.medium} alt="user's-image" className="img-responsive"/>
                        <span>{`Hello ${author.name.first} ${author.name.last}`}</span>
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