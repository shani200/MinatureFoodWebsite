import websiteConfig from './websiteConfig';
import NotificationSystem from 'react-notification-system';
import 'whatwg-fetch';

export default class WebsiteCommonService {

    constructor() {
        this._galleryItemArr = websiteConfig.galleryItemArr;
       // this._notificationSystem = null;
    }

    get galleryItemArr() {
        return this._galleryItemArr;
    }

  /*  _addNotification(event){
        event.preventDefault();
        this._notificationSystem.addNotification({
            message: 'Notification message',
            level: 'success'
        });
    }
*/

    createFetch(){
        const url = 'https://randomuser.me/api/?results=1';
       let myThis=this;
        fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                myThis.setState({authors: data.results})
                //return (Promise.resolve(data.results));
            })
            .catch(function(error) {
                console.log(error);
            });
    }

}