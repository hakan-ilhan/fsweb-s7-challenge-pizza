import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"
import images from "../Assets/logo.svg";

function Homepage() {
    return (
        <div class="home">
            <div class="anasayfa-box">
                <img src={images}></img>
                <h1>KOD ACIKTIRIR <br />PIZZA, DOYURUR </h1>
                <Link to="/order">
                    <button id="aciktim">ACIKTIM</button>
                </Link>
            </div>
        </div>

    )
}

export default Homepage

