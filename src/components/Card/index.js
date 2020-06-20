import React from 'react'
import Button from '../Button'
import './index.scss'

export default function Card(repos) {

    return (
        <div className='card-wrapper'>
            <div style={{ width: '80%' }}>
                <a className='name' href="#">{repos.repo.name}</a>
                <div className='desc'>{repos.repo.description}</div>
                <div className='updated'>{repos.repo.updated_at}</div>
            </div>
            <div className='star-button'><Button>Star</Button></div>
        </div >
    )
}
