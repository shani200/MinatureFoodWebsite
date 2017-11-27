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
              <div className="create">
                  <span>Created By:</span>
                  <span>Shani Kahila</span>
              </div>
               <div className="year">
                   <span>Year:</span>
                   <span>2017</span>
               </div>
               <div className="contact">
                   <span>Contact:</span>
                   <span>shani20086@gmail.com</span>
                </div>
            </div>
        );
    }
}