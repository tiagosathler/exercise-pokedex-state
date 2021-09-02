import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
    }
    this.nextPokemon = this.nextPokemon.bind(this);
  }
  
  nextPokemon(pokemons) {
    if (this.state.index !== pokemons.length - 1  ) {
      this.setState((previousState, _props) => ({
        index: previousState.index + 1,
      }));
    } else {
      this.setState({
        index: 0,
      });
    }
  };

  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        <button onClick={() => this.nextPokemon(pokemons)}>Next</button>
        <Pokemon 
          key={pokemons[this.state.index].id}
          pokemon={pokemons[this.state.index]} />        
      </div>
    );
  };
};

export default Pokedex;
