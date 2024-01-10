import React from 'react'
import "./Success.css"
import logo from "../Assets/logo.svg"

function Success() {
    return (
        <div className='success-container'>
            <div>
                <img src={logo} />
            </div>
            <div>
                <p>TEBRİKLER!<br />SİPARİŞİNİZ ALINDI!</p>
            </div>
        </div>

    )
}

export default Success