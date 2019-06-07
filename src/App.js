import React from "react";
import PlayerForm from "./PlayerForm/PlayerForm";
import AllPlayers from "./AllPlayers/AllPlayers";
import Teams from "./Teams/Teams";
import "./App.css";

export default class App extends React.Component {
  state = {
    allPlayers: {},
    teamOne: [],
    teamTwo: []
  };

  handleAddPlayer = (name, skill) => {
    const allPlayers = { ...this.state.allPlayers };
    allPlayers[name] = skill;
    console.log(allPlayers);
    this.setState({
      allPlayers
    });
  };

  render() {
    return (
      <div className="App">
        <PlayerForm
          allPlayers={this.state.allPlayers}
          handleAddPlayer={this.handleAddPlayer}
        />
        {this.state.allPlayers && (
          <AllPlayers AllPlayers={this.state.allPlayers} />
        )}

        <Teams teamOne={this.state.teamOne} teamTwo={this.state.teamTwo} />
      </div>
    );
  }
}
