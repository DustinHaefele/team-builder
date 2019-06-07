import React from 'react';

export default class PlayerForm extends React.Component{

 handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.playerName.value, e.target.playerSkill.value)
    this.props.handleAddPlayer(e.target.playerName.value, e.target.playerSkill.value);
  }

  render ()
  {return (
    <form onSubmit={this.handleSubmit}>
      <input id ='playerName' type='text' placeholder='newPlayer'/>
      <select id='playerSkill'>
        <option value='good'>Good</option>
        <option value='better'>Better</option>
        <option value='best'>Best</option>
      </select>
      <button type='submit'>Make My Teams</button>
    </form>
  )}
}