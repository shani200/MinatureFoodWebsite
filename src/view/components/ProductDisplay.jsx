import React from 'react';
import '../css/productDisplay.css'
import Cactus from '../pictures/cactus.jpg';

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
            <div className="ProductBackdrop">
                <div className="ProductModal">
                    <img className="images" src={Cactus}/>
                    <div className="description">555</div>
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

