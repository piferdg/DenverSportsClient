import React from 'react'

const Player = (props) => {
  return (
    <div className='player'>
      <h4>{props.playerFirstName} {props.playerLastName} - {props.playerPosition}</h4>
      <button onClick={(event) => props.deletePlayer(event, props.playerId)}>Delete Player</button>
    </div>
  )
}

export default Player