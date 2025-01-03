import React, { useState } from 'react'

export function FollowCard({children, userName}){
    const imgSrc = `https://unavatar.io/${userName}`
    const imgAlt = `${userName} image`
    const atUserName = `@${userName}`
    const [isFollowing, setIsFollowing] = useState(false)   
    const toggleFollow = () => {
        setIsFollowing(!isFollowing)
    }
    const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ?
    'tw-followCard-button is-following'
    : 'tw-followCard-button'
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className='tw-followCard-avatar' 
                src={imgSrc} 
                alt={imgAlt} />
                <div className="tw-followCard-info">
                    <strong>
                        {children}
                    </strong>
                    <span className="tw-followCard-userName">
                        {atUserName}
                    </span>
                </div>
            </header>
            <button className={buttonClassName} onClick={toggleFollow}>
                {buttonText}
            </button>
        </article>
    )
}