import React from 'react';
import '../css/login.css'
import 'whatwg-fetch'



export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.randomUser = this.randomUser.bind(this);
    }

/*
    <div className="modal-header">
                       <div>  <a classID="register-tab" href="#" aria-label="Registration form" role="tab"
                                 aria-controls="registration-form" aria-selected="false" >Register</a>
                       </div>
                       <span>/</span>
                       <div>  <a classID="sign-in-tab" href="#" aria-label="Sign In form" role="tab"
                                 aria-controls="signin-form" aria-selected="true" >Sign In </a>
                       </div>
                   </div>
 */

 randomUser(){
    const ul = document.getElementById('authors');
    const url = 'https://randomuser.me/api/?results=1';
    let myThis=this;
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            // alert(data.results);
            myThis.setState({authors: data.results})
            alert(myThis.authors);
            // let authors = data.results;
            // return authors.map(function(author) {
            //     let li = document.createElement('li'),
            //         img = document.createElement('img'),
            //         span = document.createElement('span');
            //     img.src = author.picture.medium;
            //     span.innerHTML = `${author.name.first} ${author.name.last}`;
            //     li.appendChild(img);
            //     li.appendChild(span);
            //     ul.appendChild( li);
            // })
        })
        .catch(function(error) {
            console.log(error);
        });

}

    render() {
        //render nothing if the prop show is false
        if(!this.props.show){
            return null;
        }
        return (
            <div className="backdrop">
                <div className="LogInModal">
                    <form>
                        <h2>Sign in</h2>
                        <label>
                          Email or Username:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Password:
                            <input type="text" name="password" />
                        </label>
                        <input type="submit" value="Sign in" className="submit" onClick={this.randomUser}/>
                    </form>

                  <div className="footer">
                    <button  className="btn-close" onClick={this.props.onClose}>
                        X
                    </button>
                  </div>
                </div>
            </div>


        );
    }
}

