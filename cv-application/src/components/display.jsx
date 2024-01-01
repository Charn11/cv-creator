import { useState } from 'react'
import '../styles/display.css'

function Display(props){
    let firstName = props.firstName;
    let lastName = props.lastName;
    let email = props.email;
    let number = props.number;

    return(
        <div className='display'>
            <h1>{firstName} {lastName}</h1>
            <p className='p1'>{email} | {number}</p>
            <h3 className='exp'>EXPERIENCE</h3>
        </div>
    )
}

export default Display;