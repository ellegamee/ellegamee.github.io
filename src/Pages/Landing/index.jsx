import React from "react"
import { Link } from 'react-router-dom'
import "./index.css"

export default function Landing() {
    const intro_text = "Hello!"
    const name_text = "Portfolio"

    return (
        <div className="landing__background">            
            <div className="text__wrapper">
                <p className="text__wrapper--intro">{intro_text}</p>
                <Link to="/home" className="text__wrapper--name">{name_text}</Link>
            </div>
            <div className="instruction__wrapper">
                <p className="instruction__wrapper--text">click on portfolio</p>
            </div>
        </div>
    )
}
