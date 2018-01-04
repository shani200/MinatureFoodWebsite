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
       // this._addNotification = this._addNotification.bind(this);
    }

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
        this.forceUpdate();
    }



 /*   _addNotification(event){
        event.preventDefault();
        this._notificationSystem.addNotification({
            message: 'Notification message',
            level: 'success'
        });
    }
*/

 /*
   <div className="Notification">
                    <button className="notification_btn" onClick={this._addNotification}>Add notification</button>
                    <NotificationSystem ref="notificationSystem" />
                </div>

 */

creteStyle(){
    let createStyle = {
        NotificationItem: { // Override the notification item
            DefaultStyle: { // Applied to every notification, regardless of the notification level
                margin: '5px 5px 2px 10px'
            },

            success: { // Applied only to the success notification item
                color: '#657268',
                borderTop: '4px solid #afbeb2',
                backgroundColor: '#fbfdf9',

            },
            info:{
                color: '#5d6c8f',
                borderTop: '4px solid #788ab7',
                backgroundColor: '#fbfdf9',
            },
            error:{
                color: '#7a2b42',
                borderTop: '4px solid #bf446a',
                backgroundColor: '#fbfdf9',
            }
        }
    }
  return createStyle;
}


    render() {

        let style = this.creteStyle();
        return (
            <div className="mainScreen">
                <Header />
                <NotificationSystem ref="notificationSystem" style={style}/>
                <Body notification={this._notificationSystem}/>
                <Footer  message={this.props.message} />
            </div>
        );
    }
}



