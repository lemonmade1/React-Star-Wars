import React, { Component } from 'react';
import { 
  Route, 
  Switch, 
  Link 
} from 'react-router-dom';

import { getAllStarShips } from './services/sw-api';
import Starships from './components/Starships';

import './App.css';
class App extends Component {
  
  state = {
    starships: []
  };

  getStarship = (idx) => {
    return this.state.starships[idx];
  }

  async componentDidMount() {
    const starships = await getAllStarShips();
    this.setState({ 
      starships: starships 
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">STAR WARS STARSHIPS</header>
        <Switch>
          <Route exact path='/' render={() => 
            <section>
              {this.state.starships.map(starship => 
                <Link
                  to={{
                    pathname: '/starships',
                    state: starship
                  }}
                  key={starship.name}
                >
                  {starship.name}
                </Link>
              )}
            </section>
          }/>
          <Route path='/starships' render={({location}) => 
            <Starships
              location={location}
            />
          }/>
        </Switch>
      </div>
    );
  }

}

export default App;