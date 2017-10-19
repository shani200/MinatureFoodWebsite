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
                <table className="Table">
                    <thead>
                    <tr>
                        <th>Created by:</th>
                        <th>Year:</th>
                        <th>Contact:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Shani Kahila</td>
                        <td>2017</td>
                        <td>shani20086@gmail.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}