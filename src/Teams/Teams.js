import React from "react";
import './Teams.css'

export default function Teams(props) {
  const teamOne = props.teamOne.map((play,i) => <li key={i} className='emerald player-name'>{play}</li>);
  const teamTwo = props.teamTwo.map((play,i) => <li key={i} className='red player-name'>{play}</li>);
  return (
    <div className="row">
      <div className="column teams">
        <h2 className='emerald team-name'>Team One</h2>
        <ul className='team-list'>{teamOne}</ul>
      </div>
      <div className="column teams">
        <h2 className='red team-name'>Team Two</h2>
        <ul className='team-list'>{teamTwo}</ul>
      </div>
    </div>
  );
}
