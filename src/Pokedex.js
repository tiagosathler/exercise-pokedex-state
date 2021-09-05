import React from "react";
import Pokemon from "./components/Pokemon";
import Button from "./components/Button";


class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    const { pokemons } = this.props;
    this.state = {
      index: 0,
      id: "All",
      pokemonsFiltered: pokemons,
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleFilter({target}, pokemons) {
    const currId = target.id;    
    let array = pokemons;
    this.setState(({ id: prevId }, _props) => {
      if (currId !== "All") {
        array = pokemons.filter(({ type }) => type === currId);
        const currBtn = document.getElementById(currId);
        currBtn.classList.add("selected");
      }
      if (prevId !== "All") {
        const prevBtn = document.getElementById(prevId);
        prevBtn.classList.remove("selected");
      }
      return {
        index: 0,
        id: currId,
        pokemonsFiltered: array,
      };
    });
  }

  handleNext(event, pokemons) {
    if (this.state.index !== pokemons.length - 1) {
      this.setState(({ index: prevIndex }, _props) => ({
        index: prevIndex + 1,
      }));
    } else {
      this.setState({
        index: 0,
      });
    }
  }

  render() {
    const { pokemons } = this.props;
    const { index, pokemonsFiltered } = this.state;

    const types = pokemons.reduce(
      (acc, { type }) => {
        if (!acc.includes(type)) {
          acc.push(type);
        }
        return acc;
      },
      ["All"]
    );

    return (
      <section>
        <div>
          {types.map((type) => (
            <Button
              type={type}              
              pokemons={pokemons}
              eventListener={this.handleFilter}
            />
          ))}
        </div>
        <div className="pokedex">
          <Pokemon
            key={pokemonsFiltered[index].id}
            pokemon={pokemonsFiltered[index]}
          />
        </div>
        <Button
          type="Next"          
          pokemons={pokemonsFiltered}
          eventListener={this.handleNext}          
        />
      </section>
    );
  }
}

export default Pokedex;
