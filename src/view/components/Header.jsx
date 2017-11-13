import React from 'react';
import '../css/header.css'
import NotificationSystem from 'react-notification-system';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        return (

            <div className="flex-container">
               <div className="name"> Sample </div>
                <div className="Notification">
                <button onClick={this._addNotification}>Add notification</button>
                <NotificationSystem ref="notificationSystem" />
                </div>
           </div>
            
        );
    }
}