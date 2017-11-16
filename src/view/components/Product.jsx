import React from 'react';
import '../css/product.css'



export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.image;
        this.description;
    }

    render() {
        return (
            <div className="gallery-display">
                <div className="gallery">

                    <div className="image">1</div>

                     <div className="desc">Add a description of the image here</div>
                </div>

                <div className="gallery">

                    <div className="image">2</div>

                    <div className="desc">Add a description of the image here</div>
                </div>

                <div className="gallery">

                    <div className="image">3</div>

                            <div className="desc">Add a description of the image here</div>
                </div>

                <div className="gallery">

                    <div className="image">4</div>

                <div className="desc">Add a description of the image here</div>
                </div>
                <br/>
                <div className="gallery">

                    <div className="image">5</div>

                    <div className="desc">Add a description of the image here</div>
                </div>

                <div className="gallery">

                    <div className="image">6</div>

                    <div className="desc">Add a description of the image here</div>
                </div>

                <div className="gallery">

                    <div className="image">7</div>

                    <div className="desc">Add a description of the image here</div>
                </div>

                <div className="gallery">

                    <div className="image">8</div>

                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
        );
    }
}
