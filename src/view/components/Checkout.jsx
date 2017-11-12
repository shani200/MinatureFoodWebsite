import React from 'react';
import NotificationSystem from 'react-notification-system';
import 'whatwg-fetch'


export default class Checkout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {authors: false};
       this._notificationSystem=null;
        this._addNotification = this._addNotification.bind(this);
        this._renderAuthors = this._renderAuthors.bind(this);

    }

    _addNotification(event){
        event.preventDefault();
        this._notificationSystem.addNotification({
            message: 'Notification message',
            level: 'success'
        });
    }

    componentWillMount() {
        const ul = document.getElementById('authors');
        const url = 'https://randomuser.me/api/?results=11';
        let myThis = this;
        fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                // alert(data.results);
                myThis.setState({authors: data.results})

                // return authors.map(function(author) {
                //     this.author = author;
                // let li = document.createElement('li'),
                //     img = document.createElement('img'),
                //     span = document.createElement('span');
                // img.src = author.picture.medium;
                // span.innerHTML = `${author.name.first} ${author.name.last}`;
                // li.appendChild(img);
                // li.appendChild(span);
                // ul.appendChild( li);
                // })
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
    }

    _renderAuthors() {
        this.state.authors.map((number) =>
            <li>{number}</li>
        );
        // alert('123');
        // this.state.authors.map(function(item, i){
        //     console.log('test');
        //     return <li>Test</li>
        // })
    }

    render() {
        return (
            <div>
                {this._renderAuthors}
                {this.state.authors.length > 0 &&
                <h2>
                    You have {this.state.authors.length} unread messages.
                </h2>
                }
                <button onClick={this._addNotification}>Add notification</button>
                <NotificationSystem ref="notificationSystem" />
            </div>
        );
    }
}
