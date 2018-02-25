import React, { Component } from 'react';
import './heroOverview.css';

class HeroOverview extends Component {
    render() {
        return (<div className='hero-overview-container'>
            <img src={this.props.image} alt={this.props.name} />
            <h1>{this.props.name}</h1>
            <p className='hero-overview-text'>{this.props.overview}</p>
            <a href={this.props.link}>More info..</a>
        </div>);
    }
}

export default HeroOverview;