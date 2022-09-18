import React from 'react'
import './intro.css'
import Fade from 'react-reveal/Fade';

const Intro = () => {
    return (
        <div className='home'>
            <Fade bottom cascade>
                <div className="home-text">
                    <h1>Men's New <br /><span>Arrivals</span></h1>
                    <p>New colors, now also available in men's sizing</p>
                    <a className="btn">View Collection</a>
                </div>
            </Fade>
        </div>
    )
}

export default Intro