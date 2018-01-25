import React from 'react';
import '../css/registerMobile.css'

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            emailValue: '',
            passwordValue: '',
            confirmPasswordValue: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.saveInputs = this.saveInputs.bind(this);
        this.clearState = this.clearState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onStayOpenModal = this.onStayOpenModal.bind(this);

    }

    _addNotification(event,missInput,wrongPassword,wrongEmail){
        if(missInput){
            event.preventDefault();
            this.props.notification.addNotification({
                message: 'one or more inputs are missing',
                level: 'error',
                position: 'tc'
            });
        }
        if(wrongEmail){
            event.preventDefault();
            this.props.notification.addNotification({
                message: "the email isn't valid",
                level: 'error',
                position: 'tc'
            });
        }
        if(wrongPassword){
            event.preventDefault();
            this.props.notification.addNotification({
                message: 'the passwords are not equals, try again',
                level: 'error',
                position: 'tc'
            });
        }
        if(!missInput && !wrongPassword && !wrongEmail){
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

    handleEmailChange(event){
        this.setState({emailValue: event.target.value});
    }


    handlePasswordChange(event){
        this.setState({passwordValue: event.target.value});
    }

    handleConfirmPasswordChange(event){
        this.setState({confirmPasswordValue: event.target.value});
    }

    clearState(){
        this.setState({nameValue: '',emailValue: '',passwordValue: '',confirmPasswordValue: ''});
    }

    onStayOpenModal(){
        this.props.onOpen();
    }

    saveInputs(event) {
        if (typeof(Storage) !== "undefined") {
            let name = this.state.nameValue;
            let email = this.state.emailValue;
            let password = this.state.passwordValue;
            let confirmPassword = this.state.confirmPasswordValue;
            let wrongPassword = false;
            let missInput = false;
            let wrongEmail = false;
            let checkEmail;
            if(!name || !email || !password ||!confirmPassword){
                missInput = true;
                this.onStayOpenModal();
                this._addNotification(event,missInput,wrongPassword,wrongEmail);
                return undefined;
            }
            let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            checkEmail = re.test(email) ;
            if(!checkEmail){
                wrongEmail = true;
                this._addNotification(event,missInput,wrongPassword,wrongEmail);
                return undefined;
            }
            if(password !== confirmPassword){
                wrongPassword = true;
                this._addNotification(event,missInput,wrongPassword,wrongEmail);
                return undefined;
            }
            if(name && email && password && confirmPassword){
                let register = {name: this.state.nameValue, email: this.state.emailValue, password: this.state.passwordValue, confirmPassword: this.state.confirmPasswordValue};
                sessionStorage.setItem("register", JSON.stringify(register));
                this._addNotification(event,missInput,wrongPassword,wrongEmail);
                this.props.onClose();
            }
        } else {
            alert('Sorry, your browser does not support web storage...');
        }
        event.preventDefault();
    }

    handleSubmit(event){
        this.saveInputs(event);
        this.clearState();

    }

    render() {
        //render nothing if the prop show is false
        if(!this.props.show){
            return null;
        }
        return (
            <div className="RegisterBackdrop">
                <div className="RegisterModalMobile">

                    <form onSubmit={this.handleSubmit}>
                        <div className="registerMobile">Register</div>
                        <label>
                            First Name:
                            <input type="text" name="first-name" placeholder="Your name.." value={this.state.nameValue} onChange={this.handleNameChange}/>
                        </label>
                        <label>
                            Email:
                            <input type="text" name="email" placeholder="Your email.." value={this.state.emailValue} onChange={this.handleEmailChange}/>
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" placeholder="Your password.." value={this.state.passwordValue} onChange={this.handlePasswordChange}/>
                        </label>
                        <label>
                            Confirm Password:
                            <input type="password" name="confirm-password" placeholder="Your password again.." value={this.state.confirmPasswordValue} onChange={this.handleConfirmPasswordChange}/>
                        </label>
                        <input type="submit" value="Register" className="buttonMobileRegister"/>
                    </form>

                    <div className="btn-register-exit-mobile">
                        <button  className="btn-register-close-mobile" onClick={this.props.onClose}>
                            X
                        </button>
                    </div>
                </div>
            </div>


        );
    }
}

