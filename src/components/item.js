import React from 'react'
import { Link } from "gatsby"

import picture from '../images/mask.jpg'
import './item.css'

export default function Project(props) {
    return (
        <Link to={props.to} className='Item-link'>
        <div style={{ 
            display: 'grid',
            gridTemplateColumns: '2fr 3fr',
            columnGap: '2.5em'
            }}>
            <div style={{
                justifySelf: 'end',
                alignSelf: 'center'
            }}>
                <img src={picture} height='90em' width='200em' />
            </div>
            <div style={{
                alignSelf: 'center'
            }}>
                <h2 style={{ marginBottom: '0'}}>{props.title}</h2>
                <p>{props.keywords}</p>
            </div>
        </div>
        </Link>
    )
}