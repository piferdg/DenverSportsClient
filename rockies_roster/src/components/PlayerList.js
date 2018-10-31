import React from 'react'
import Player from './Player'

const PlayerList = (props) => {
  const playerInfo = props.player.map((individualPlayer) => {
    return <Player key={individualPlayer.id}
            playerId={individualPlayer.id}
            playerFirstName={individualPlayer.firstname}
            playerLastName={individualPlayer.lastname}
            playerPosition={individualPlayer.position}
            playerImage={individualPlayer.image}
            deletePlayer={props.deletePlayer} /> 
  })

  return (
    <div className='players'>
      {playerInfo}
    </div>
  )
}

export default PlayerList