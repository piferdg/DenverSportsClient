import React from 'react'
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'

const Player = (props) => {
  return (
    <div className='player'>
      <Card>
        <CardImg src={props.playerImage} alt="Player Headshot" />
        <CardBody>
          <CardTitle className='player-firstname-lastname'>{props.playerFirstName} {props.playerLastName}</CardTitle>
          <CardSubtitle className='player-position'>Position: {props.playerPosition}</CardSubtitle>
          <Button color='danger' onClick={(event) => props.deletePlayer(event, props.playerId)}>Delete Player</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Player