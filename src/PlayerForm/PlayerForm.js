import React from 'react';

export default class PlayerForm extends React.Component{

 handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.playerName.value, e.target.playerSkill.value)
    this.props.handleAddPlayer(e.target.playerName.value, e.target.playerSkill.value);
    e.target.playerName.value = '';
    // e.target.playerSkill.value = 1;
  }

  render ()
  {return (
    <form onSubmit={this.handleSubmit}>
      <input id ='playerName' type='text' placeholder='newPlayer'/>
      <select id='playerSkill'>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <button type='submit'>Add Player</button>
    </form>
  )}
}