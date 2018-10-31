import React from 'react'

const Header = (props) => {
    return (
        <div className="header">
            <img src={props.src} alt="Colorado logo" />
            <div className='header-text'>
                <h2>Colorado Rockies Lineup Card</h2>
                <p>Add and remove players from the roster!</p>
            </div>
        </div>

    )
}

export default Header