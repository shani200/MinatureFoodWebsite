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
  /*  {this.state.showMessage && <span className="message">{this.state.message}</span>}*/
  
    render() {
        return (
            <div className="alert-zone">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Peter</td>
                        <td>Griffin</td>
                    </tr>
                    <tr>
                        <td>Peter</td>
                        <td>Griffin</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}