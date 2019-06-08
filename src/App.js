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
    let level1 = [];
    let level2 = [];
    let level3 = [];
    let level4 = [];
    let level5 = [];
    let teamOne = [];
    let teamTwo = [];

    Object.keys(this.state.allPlayers).forEach(player => {
      if (this.state.allPlayers[player] === "1") {
        level1 = [...level1, player];
      } else if (this.state.allPlayers[player] === "2") {
        level2 = [...level2, player];
      } else if (this.state.allPlayers[player] === "3"){
        level3 = [...level3, player];
      }
      else if (this.state.allPlayers[player] === "4"){
        level4 = [...level4, player];
      }
      else {
        level5 = [...level5, player];
      }
    });

    //Shuffle your Arrays to randomize teams
    level1 = this.shuffle(level1);
    level2 = this.shuffle(level2);
    level3 = this.shuffle(level3);
    level4 = this.shuffle(level4);
    level5 = this.shuffle(level5);

    
    const allPlayers = [...level5, ...level4, ...level3, ...level2, ...level1];
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
