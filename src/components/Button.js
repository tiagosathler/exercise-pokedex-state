import React from "react";

class Button extends React.Component {
  render() {    
    const { pokemons, type, eventListener } = this.props;  
    return (
      <button
        id={type}
        key={type}
        onClick={(event) => eventListener(event, pokemons)}
        disabled={pokemons.length === 1}
      >
        {type}
      </button>
    );
  }
}

export default Button;
