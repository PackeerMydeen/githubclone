import React, { useEffect, useState, memo } from 'react'
import Header from '../../components/Header'
import { getProfile, getRepos } from '../../store'
import './index.scss'
import Profile from '../Profile'
import Lists from '../Lists'

function Main() {
    const [profile, setProfile] = useState({})
    const [repos, setRepos] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        getProfile().then(res => setProfile(res)).catch(err => setError(true))
        getRepos().then(res => {
            setRepos(res);
        }).catch(err => setError(true))
            .then(() => setLoading(false))
    }, [])

    return (
        <div className='main-wrapper'>
            <Header />
            {error ? <div className='loading'>Something went wrong!</div> :
                <div className='main-body'>
                    {!isLoading ?
                        <>
                            <div className='left-section'>
                                <Profile profile={profile} />
                            </div>
                            <div className='right-section'>
                                <Lists repos={repos} />
                            </div>
                        </>
                        : <div className='loading'>Loading...</div>}
                </div>
            }
        </div>
    )
}


export default memo(Main)