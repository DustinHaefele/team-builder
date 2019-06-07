import React from 'react';
import './AllPlayers.css'

export default function AllPlayers(props) {
  

  const Players = Object.keys(props.AllPlayers).map(name => <li>{name}</li>)

  return (
    <ul>
      {Players}
    </ul>
  )


}