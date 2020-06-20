import React from 'react'
import './index.scss'

export default function Avatar({name}) {
    return (
        <div className='avatar-wrapper'>
            <img src={name} alt='avatar' className='image'/>
        </div>
    )
}
