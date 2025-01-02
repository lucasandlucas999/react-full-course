
export function FollowCard({ name, userName, isFollow }) {
    const imgSource = `https://unavatar.io/${userName}`
    const imgAlt = `${userName} image`
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imgSource}
                    alt={imgAlt} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className="tw-followCard-userName">{userName}</span>
                </div>
            </header>
            <button className="tw-followCard-button">
                {(isFollow) ? 'Siguiendo' : 'Seguir'}
            </button>
        </article>
    )

}

