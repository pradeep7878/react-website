import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <div>
                <div className="card" >
                    <img className="card-img-top" src={props.img} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <Link to='#' className="btn">Go somewhere</Link>
                    </div>
                </div>
        </div>
    )
}

export default Card
