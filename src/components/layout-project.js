import React from 'react'
import './layout-project.css'

export default function Project(props) {
    return (
    <>
    <div className='Project-header'>
        <h2>{props.title}</h2>
        <div className='Project-details'>
            <p className='no-margin'><span className='underline'>Keywords:</span> {props.keywords}</p>
            <p className='no-margin'><span className='underline'>Skills:</span> {props.skills}</p>
        </div>
    </div>
    {props.children}
    </>
    )
}