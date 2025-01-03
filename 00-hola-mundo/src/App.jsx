import './App.css'
import { FollowCard } from './FollowCard'

function App() {
    return (
        <section className='sectionApp'>
            <FollowCard userName='lucasandlucas999'>Dedo</FollowCard>
            <FollowCard userName='elonmusk'>Elon Musk</FollowCard>
            <FollowCard userName='torvalds'>Linus Torvalds</FollowCard>
        </section>
    )

}

export default App