export function FollowCard({userName, children, isFollowing}){
    const imgSrc = `https://unavatar.io/${userName}`
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
                <button className="tw-followCard-button">
                    {(isFollowing)
                    ? 'Siguiendo'
                    : 'Seguir'}
                </button>
            </aside>
        </article>
    )
}
