import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  constructor(props) {
    super(props)
    const { pokemons } = this.props;
    this.state = {
      index: 0,
      fireBtnStyle: {
        backgroundColor: '#e6e2d3'
      },
      psychicBtnStyle: {
        backgroundColor: '#e6e2d3'
      },
      // pokemonsFiltered: pokemons.filter(({type}) => type === 'Fire'),
      pokemonsFiltered: pokemons,
    }
    this.nextPokemon = this.nextPokemon.bind(this);
    this.fireSelected = this.fireSelected.bind(this);
    this.psychicSelected = this.psychicSelected.bind(this);    
  }
  
  fireSelected(pokemons) {
    this.setState({
      pokemonsFiltered: pokemons.filter(({type}) => type === 'Fire'),
      fireBtnStyle: {
        backgroundColor: '#eca1a6'
      },
      psychicBtnStyle: {
        backgroundColor: '#e6e2d3'
      },
      index: 0,
    });
  };

  psychicSelected(pokemons) {
    this.setState({
      pokemonsFiltered: pokemons.filter(({type}) => type === 'Psychic'),
      fireBtnStyle: {
        backgroundColor: '#e6e2d3'
      },
      psychicBtnStyle: {
        backgroundColor: '#eca1a6'
      },
      index: 0,
    });
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
    const { index, fireBtnStyle, psychicBtnStyle, pokemonsFiltered} = this.state;
    
    return (
      <section>
        <div>
          <button onClick={() => this.nextPokemon(pokemonsFiltered)}>Next</button>
          <button 
            style={fireBtnStyle } 
            onClick={() => this.fireSelected(pokemons)}>
            Fire
          </button>
          <button
            style={psychicBtnStyle}
            onClick={() => this.psychicSelected(pokemons)}>
            Psychic</button>
        </div>
        <div className="pokedex">
          <Pokemon 
            key={pokemonsFiltered[index].id}
            pokemon={pokemonsFiltered[index]} />
        </div>
      </section>
    );
  };
};

export default Pokedex;
