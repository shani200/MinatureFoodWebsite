import React from 'react';
import 'whatwg-fetch'

export default class Checkout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {authors: false};
        this._renderAuthors = this._renderAuthors.bind(this);
    }


    componentWillMount() {
        //const ul = document.getElementById('authors');
        const url = 'https://randomuser.me/api/?results=1';
        let myThis=this;
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

    _renderAuthors () {
        return undefined;
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
            <div>
                {this._renderAuthors()}
                {this.state.authors.length > 0 &&
                <h4>
                    You have {this.state.authors.length} unread messages.
                </h4>
                }

            </div>
        );
    }
}