import React, { Component } from 'react';
import './enemyOverview.css';

class EnemyOverview extends Component {
    render() {
        return (<div className='enemy-overview-container'>
            <a href={this.props.link}><h1>{this.props.name}</h1></a>
            <img src={this.props.image} alt={this.props.name} />>
            <p className='enemy-overview-text'>{this.props.overview}</p>
        </div>);
    }
}

export default EnemyOverview;