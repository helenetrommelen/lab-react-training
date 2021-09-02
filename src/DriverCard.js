import React, { Component } from 'react';
import Rating from './Rating'

class DriverCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <div><img src={this.props.img} alt="profile picture" /></div>
               <div>
                   <p>{this.props.name}</p>
                   <Rating>1.49</Rating>
                   <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
               </div> 
            </div>
        );
    }
}

export default DriverCard;