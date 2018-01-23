import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import NotificationSystem from 'react-notification-system';
import HeaderMobile from "./HeaderMobile";
import BodyMobile from "./BodyMobile";
import '../css/layout.css'

export default class Layout extends  React.Component {
    constructor(props){
        super(props);
        this.state = {authors: false,
        };
        this._notificationSystem = null;
        this.getAuthors = this.getAuthors.bind(this);

    }

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
        this.forceUpdate();
    }

    getAuthors (authors) {
        this.setState({authors: authors});
    }



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

    isMobile(){
        const ua = navigator.userAgent;
        return (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) && (screen.width <= 750);
    }

    render() {
        let style = this.creteStyle();
        if(this.isMobile()){
            return (
                <div className="mainScreen">
                    <HeaderMobile authors={this.state.authors}/>
                    <NotificationSystem ref="notificationSystem" style={style}/>
                    <BodyMobile notification={this._notificationSystem}
                          getAuthors={this.getAuthors}
                    />
                </div>
        );}
        else{
           return(
               <div className="mainScreen">
                   <Header authors={this.state.authors}/>
                   <NotificationSystem ref="notificationSystem" style={style}/>
                   <Body notification={this._notificationSystem}
                         getAuthors={this.getAuthors}
                   />
                   <Footer  message={this.props.message} />
               </div>
           );}
    }
}








