import React from 'react';
import './AllPlayers.css'

export default function AllPlayers(props) {
  
  //Add Delete Button for mistyped players
  
  const Players = Object.keys(props.AllPlayers).map((name,i)=> <li key={i} className='player'>{name}</li>)

  return (
    <ul className ='allPlayers'>
      {Players}
    </ul>
  )


}