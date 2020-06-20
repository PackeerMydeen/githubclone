import React from 'react'
import './index.scss'

export default function SearchBox(props) {
    return (
        <div className='search-wrapper'>
            <input onChange={props.onChange} value={props.value} name='search' className='inputBox'/>
        </div>
    )
}
