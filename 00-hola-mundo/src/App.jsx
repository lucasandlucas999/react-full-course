import './App.css'
import { FollowCard } from './FollowCard'

function App(){
    const atUserName = (userName) => `@${userName}`
    return( 
     <section className = 'sectionApp'>
        <FollowCard atUserName={atUserName} name='Lucas' userName='lucasandlucas999' isFollow={true}></FollowCard>
        <FollowCard atUserName={atUserName} name='Lucas' userName='lucasandlucas999' isFollow={false}></FollowCard>
        <FollowCard atUserName={atUserName} name='Lucas' userName='lucasandlucas999' isFollow={false}></FollowCard>
        <FollowCard atUserName={atUserName} name='Lucas' userName='lucasandlucas999' isFollow={false}></FollowCard>
     </section>    
     )
}

export default App