import React from 'react';
import websiteCommonService from '../../controller/WebsiteCommonService';
import '../css/login.css'




export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            passwordValue: '',
            userSignedIn: false
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this._addNotification = this._addNotification.bind(this);
        this.saveInputs = this.saveInputs.bind(this);
        this.clearState = this.clearState.bind(this);
        this.setStateOfUserSignIn = this.setStateOfUserSignIn.bind(this);
        this.onStayOpenModal = this.onStayOpenModal.bind(this);

    }
    componentDidMount(){
        sessionStorage.removeItem("user");
    }

    _addNotification(event,missInput,nameOrEmailIsWrong,notValidPassword){
        if(nameOrEmailIsWrong && !missInput ){
            event.preventDefault();
            this.props.notification.addNotification({
                message: 'name is wrong',
                level: 'error',
                position: 'tc'
            });
        }
        if(missInput && !nameOrEmailIsWrong){
            event.preventDefault();
            this.props.notification.addNotification({
                message: 'name or password are missing',
                level: 'error',
                position: 'tc'
            });
        }
        if(notValidPassword){
            event.preventDefault();
            this.props.notification.addNotification({
                message: 'Password must contain at least 4 letters',
                level: 'error',
                position: 'tc'
            });
        }
        if(!missInput && !nameOrEmailIsWrong && !notValidPassword){
            event.preventDefault();
            this.props.notification.addNotification({
                message: 'You signed in',
                level: 'success',
                position: 'tc'
            });
        }
    }

    handleNameChange(event) {
            this.setState({nameValue: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({passwordValue: event.target.value});
    }

    clearState(){
        this.setState({nameValue: '', passwordValue: ''});

    }

    onStayOpenModal(){
        this.props.onOpen();
    }

    setStateOfUserSignIn(){
        this.setState({userSignedIn: true})
    }

    saveInputs(event) {
        if (typeof(Storage) !== "undefined") {
            let name = this.state.nameValue;
            let password =this.state.passwordValue;
            let missInput = false;
            let nameOrEmailIsWrong = false;
            let notValidPassword = false;
            //let checkEmail;
            if(!name || !password ){
                missInput = true;
                this.onStayOpenModal();
                this._addNotification(event,missInput,nameOrEmailIsWrong,notValidPassword);
                return undefined;
            }
            let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let checkEmail = re.test(name);
            if(!isNaN(name) && name){
                nameOrEmailIsWrong = true;
                this._addNotification(event,missInput,nameOrEmailIsWrong,notValidPassword);
                return undefined;
            }
            if(password.length < 4){
                notValidPassword = true;
                this._addNotification(event,missInput,nameOrEmailIsWrong,notValidPassword);
                return undefined;
            }
            if(name && password){
                let user = {name: this.state.nameValue, password: this.state.passwordValue};
                sessionStorage.setItem("user", JSON.stringify(user));
                this._addNotification(event,missInput,nameOrEmailIsWrong,notValidPassword);
                this.props.onClose();
            }
        } else {
            alert('Sorry, your browser does not support web storage....');
        }
        event.preventDefault();
    }

    // renderPicture(){
    //   return(<Header isLogIn={this.state.userSignedIn}/>);
    //
    // }

    handleSubmit(event){
        this.saveInputs(event);
        this.clearState();
        // this.renderPicture();

        websiteCommonService.createFetch().then((response) => {
            // this.setState({authors: response});
            this.props.getAuthors(response);
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
                    <form onSubmit={this.handleSubmit}>
                        <h1>Sign in</h1>
                        <label>
                          Email or Username:
                            <input type="text" name="name" placeholder="Your name.." value={this.state.nameValue} onChange={this.handleNameChange}/>
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password"   placeholder="Your password.." value={this.state.passwordValue} onChange={this.handlePasswordChange}/>
                        </label>
                        <input type="submit" value="Sign in" className="submit"   />
                    </form>

                  <div className="btn-exit">
                    <button  className="btn-close" onClick={this.props.onClose}>
                        X
                    </button>
                  </div>
                </div>
            </div>

        );
    }
}

