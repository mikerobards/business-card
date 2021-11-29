import React from 'react'
import headshot from '../img/HeadshotFeb18.jpg'

export default function Info() {
    return (
        <div className="info">
            <img src={headshot} alt="headshot" className="headshot" />
            <h1 className="info--name">Michael Robards</h1>
            <h3 className="info--position">Frontend Developer</h3>
            <p className="info--website">michaelrobards.com</p>
            <div className="btn-container">
                <button className="btn-email"><i className="fas fa-envelope"></i>Email</button>
                <button className="btn-linkedin"><i className="fab fa-linkedin"></i>LinkedIn</button>
            </div>

        </div>
    )
}