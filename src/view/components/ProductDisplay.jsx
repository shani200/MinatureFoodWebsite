import React from 'react';
import '../css/register.css'

export default class ProductDisplay extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        //render nothing if the prop show is false
        if(!this.props.show){
            return null;
        }
        return (
            <div className="RegisterBackdrop">






                    <div className="footer">
                        <button  className="btn-close" onClick={this.props.onClose}>
                            X
                        </button>
                    </div>

            </div>


        );
    }
}

