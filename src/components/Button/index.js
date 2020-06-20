import React from 'react'
import './index.scss'

export default function Button(props) {
    return (
        <div className='button-wrapper'>
            {props.children}
        </div>
    )
}
