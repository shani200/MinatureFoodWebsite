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

    creteMobileStyle(){
        let createStyle = {
            NotificationItem: { // Override the notification item
                DefaultStyle: { // Applied to every notification, regardless of the notification level
                    margin: '5px 5px 2px 10px',
                    fontSize: '7vw'
                },
                success: { // Applied only to the success notification item
                    fontSize: '3.7vw',
                    width:'45vw',
                    color: '#657268',
                    borderTop: '1.4vw solid #afbeb2',
                    backgroundColor: '#fbfdf9',

                },
                info: {
                    fontSize: '3.7vw',
                    width:'45vw',
                    color: '#5d6c8f',
                    borderTop: '1.4vw solid #788ab7',
                    backgroundColor: '#fbfdf9',
                },
                error: {
                    fontSize: '3.7vw',
                    width:'45vw',
                    color: '#7a2b42',
                    borderTop: '1.4vw solid #bf446a',
                    backgroundColor: '#fbfdf9',
                },

            },
            Dismiss: {
                DefaultStyle: {
                    fontFamily: 'Arial',
                    fontSize: '4.5vw',
                    width: '4vw',
                    height: '4vw',
                    lineHeight: '40px',
                    position: 'absolute'
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
        if(this.isMobile()){
            let style = this.creteMobileStyle();
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
           let style = this.creteStyle();
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








