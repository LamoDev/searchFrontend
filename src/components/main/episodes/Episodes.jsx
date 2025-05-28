import SingleEpisode from '../../ui/singleEpisode/SingleEpisode'
import './episodes.css'

const Episodes = () => {
    return <div className='episodes-section'>
           <h1>نتائج الحلقات  المتعلقة بـ فنجان</h1>
    <div className='episodes-container'>
         <SingleEpisode />
         <SingleEpisode />
         <SingleEpisode />
         <SingleEpisode />
         <SingleEpisode />
         <SingleEpisode />
         <SingleEpisode />      
    </div>
    </div>


}

export default Episodes