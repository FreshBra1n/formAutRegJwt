import React from 'react'
import { Link } from 'react-router-dom'

export default function Buttons() {
    return (
        <div>

            <button><Link to='/autorization'>Autorizaton</Link ></button>

            <button><Link to='/registration'>Registration</Link ></button>
        </div>
    )
}
