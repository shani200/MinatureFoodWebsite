import React from 'react';
import '../css/footer.css'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: true,
            message: props.message,
        };

    }

  
    render() {
        return (
            <div className="alert-zone">
                {this.state.showMessage && <span className="message">{this.state.message}</span>}
            </div>
        );
    }
}