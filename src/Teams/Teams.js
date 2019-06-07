import React from "react";
import './Teams.css'

export default function Teams(props) {
  const teamOne = props.teamOne.map((play,i) => <li key={i}>{play}</li>);
  const teamTwo = props.teamTwo.map((play,i) => <li key={i}>{play}</li>);
  return (
    <div className="row">
      <div className="column">
        <h3>Team One</h3>
        <ul>{teamOne}</ul>
      </div>
      <div className="column">
        <h3>Team Two</h3>
        <ul>{teamTwo}</ul>
      </div>
    </div>
  );
}
