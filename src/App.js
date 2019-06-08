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
    this.setState({
      allPlayers
    });
  };

  shuffle = array => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  
//Add 5 levels for skill and order them high to low.
  handleCreateTeams = () => {
    let good = [];
    let better = [];
    let best = [];
    let teamOne = [];
    let teamTwo = [];

    Object.keys(this.state.allPlayers).forEach(player => {
      if (this.state.allPlayers[player] === "1") {
        good = [...good, player];
      } else if (this.state.allPlayers[player] === "2") {
        better = [...better, player];
      } else {
        best = [...best, player];
      }
    });

    //Shuffle your Arrays to randomize teams
    good = this.shuffle(good);
    better = this.shuffle(better);
    best = this.shuffle(best);

    const allPlayers = [...good, ...better, ...best];
    allPlayers.forEach((play, i) => {
      if (i % 2 === 0) {
        teamOne = [...teamOne, play];
      } else {
        teamTwo = [...teamTwo, play];
      }
    });
    this.setState({
      teamOne,
      teamTwo
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="logo">
          <span className="word1">EVEN</span><br/>
          <span className="word2">TEAMS</span>
        </h1>
        <PlayerForm
          allPlayers={this.state.allPlayers}
          handleAddPlayer={this.handleAddPlayer}
        />
        {this.state.teamOne.length > 0 && (
          <Teams teamOne={this.state.teamOne} teamTwo={this.state.teamTwo} />
        )}
        <button onClick={this.handleCreateTeams} className="button" id='create-teams'>
          Create Teams
        </button>

        {this.state.allPlayers && (
          <AllPlayers AllPlayers={this.state.allPlayers} />
        )}
      </div>
    );
  }
}
