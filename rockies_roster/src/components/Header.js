import React from 'react'

const Header = (props) => {
    return (
        <div className="brochure-logo">
            <img src={props.src} alt="Colorado logo" />
            <h2>2018 Colorado Rockies Lineup Card</h2>
            <p>Add, remove, and edit players!</p>
        </div>
        
    )
}

export default Header