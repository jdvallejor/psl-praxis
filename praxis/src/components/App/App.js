import React, { Component } from 'react';
import logo from './marvel-banner.png';
import './App.css';
import HeroOverview from '../characterOverview/heroOverview';
import heroesService from '../../services/heroesService';
import EnemyOverview from '../characterOverview/enemyOverview';
import enemiesService from '../../services/enemiesService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
        enemies: []
    };
  }

  componentDidMount() {
    heroesService.getHeroes().then((heroes) => {
      this.setState({ heroes: heroes.data });
    });
    enemiesService.getEnemies().then((enemies) => {
       this.setState({ enemies: enemies.data })
    });
  }

  render() {
    let listHeroes = this.state.heroes.map((hero) =>
        <HeroOverview
            key={hero.name}
            name={hero.name}
            image={hero.image}
            overview={hero.history}
            link={hero.link} />);
      let listEnemies = this.state.enemies.map((enemy) =>
          <EnemyOverview
              key={enemy.name}
              name={enemy.name}
              image={enemy.image}
              overview={enemy.history}
              link={enemy.link} />);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h2>Heroes</h2>
        <div className="heroes-list">
          {listHeroes}
        </div>
        <div className="enemies-list">
          {listEnemies}
        </div>
      </div>
    );
  }
}

export default App;
