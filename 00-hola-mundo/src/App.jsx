import './App.css'
import { FollowCard } from './FollowCard'

function App() {
    return (
        <section className='sectionApp'>
            <FollowCard userName='lucasandlucas999' isFollowing={true}>Dedo</FollowCard>
            <FollowCard userName='elonmusk' isFollowing={true}>Elon Musk</FollowCard>
            <FollowCard userName='torvalds' isFollowing={true}>Linus Torvalds</FollowCard>
        </section>
    )

}

export default App