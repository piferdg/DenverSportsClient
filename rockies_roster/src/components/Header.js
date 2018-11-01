import React from 'react' 
import logo from '../assets/rockiesLogo.png';

const Header = (props) => {
    return (
        <div className="header">
            <div className='header-logo'>
                <img src={props.src} alt="Colorado Rockies logo" />
            </div>
            <div className='header-text'>
                <h2>Colorado Rockies Lineup Card</h2>
                <p>Add and remove players from the roster!</p>
            </div>
            <div className='secondary-header-logo'>
                <img src={logo} alt='Colorado logo'/>
            </div>
        </div>

    )
}

export default Header