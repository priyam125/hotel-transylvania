import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Hotel Transylvania</h1>
        <CardList>
          {this.state.monsters.map((monster) => (
            <h2 key={monster.id}> {monster.name} </h2>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
