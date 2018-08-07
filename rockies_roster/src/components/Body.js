import React from 'react'

const Body = (props) => {
  const playerInfo = props.player.map((individualPlayer, index) => {
    return (
        <h4 key={index}>{individualPlayer.firstname} {individualPlayer.lastname} - {individualPlayer.position}</h4>
    )
  })

  return (
    <div className='players'>
      {playerInfo}
    </div>
  )
}

export default Body