import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import NotificationSystem from 'react-notification-system';
import '../css/layout.css'


export default class Layout extends  React.Component {
    constructor(props){
        super(props);
        this._notificationSystem = null;
        this._addNotification = this._addNotification.bind(this);
    }

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
        this.forceUpdate();
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
            <div className="mainScreen">
                <Header />
                <div className="Notification">
                    <button className="notification_btn" onClick={this._addNotification}>Add notification</button>
                    <NotificationSystem ref="notificationSystem" />
                </div>
                <Body notification={this._notificationSystem}/>
                <Footer  message={this.props.message} />
            </div>
        );
    }
}



