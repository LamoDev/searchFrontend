import SingleEpisode from '../../ui/singleEpisode/SingleEpisode'
import './episodes.css'
import { useSelector } from 'react-redux'

const Episodes = () => {
   
    const searchTerm  = useSelector(state => state.results.searchTerm);

   
   return <div className='episodes-section'>
     
        <h1>نتائج الحلقات  المتعلقة بـ "{searchTerm}"</h1>
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