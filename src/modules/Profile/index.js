import React from 'react'
import Avatar from '../../components/Avatar'
import './index.scss'
import Button from '../../components/Button'

export default function Profile({ profile }) {
    return (
        <div className='profile-wrapper'>
            <Avatar name={profile.avatar_url} />
            <h1 className='name'>{profile.name}</h1>
            <div className='login'>{profile.login}</div>
            <div className='follow-button'><Button>Follow</Button></div>
            <div className='bio'>{profile.bio}</div>
            <div className='bio'>{profile.company}</div>
            <div className='bio'>{profile.location}</div>
            <div className='bio'>{profile.email}</div>
        </div>
    )
}
