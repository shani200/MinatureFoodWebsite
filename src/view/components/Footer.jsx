import React from 'react';


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
            <div >
                {this.state.showMessage && <span className="message">{this.state.message}</span>}
            </div>
        );
    }
}