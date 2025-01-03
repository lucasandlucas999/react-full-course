import { useState } from "react"

export function FollowCard({userName, children}){

    

    const imgSrc = `https://unavatar.io/${userName}`
    
    const [isFollowing, setIsFollowing] = useState(false)
    const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    const atUserName = (userName) => `@${userName}`
    const imgAlt = `${atUserName} image`
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
            <img className='tw-followCard-avatar' src={imgSrc} alt={imgAlt} />
                <div className="tw-followCard-info">
                    <strong>
                        {children}
                    </strong>
                    <span className="tw-followCard-userName">
                        {atUserName(userName)}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {buttonText}
                </button>
            </aside>
        </article>
    )
}
