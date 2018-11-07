import React from 'react'
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
  import { NavLink } from 'react-router-dom'

const Player = (props) => {
  return (
    <div className='player'>
      <Card>
        <CardImg className='player-card-image' src={props.playerImage} alt="Player Headshot" />
        <CardBody>
          <CardTitle className='player-firstname-lastname'>{props.playerFirstName} {props.playerLastName}</CardTitle>
          <CardSubtitle className='player-position'>{props.playerPosition}</CardSubtitle>
          <div className='update-and-delete-country-buttons'>
            <div className='navlink-update-button'>
              <NavLink to={'/player/update/' + props.playerId}>
                <Button className='update-player-button-on-player-card' color='success'>Update</Button>
              </NavLink>
            </div>
            <div className='delete-player-button'>
              <Button color='danger' onClick={(event) => props.deletePlayer(event, props.playerId)}>Delete Player</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Player