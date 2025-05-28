import PodcastCard from '../../ui/podcastCard/PodcastCard'
import './podcasts.css'
import { ChevronRight ,ChevronLeft ,EllipsisVertical } from 'lucide-react';


const Podcasts = () => {
    return  <div className='podcast-container'>
        
        <div className='about-result'>
            
        <h1>نتائج البودكاست المتعلقة بـ فنجان</h1>
    
        <div className='control'>
        <ChevronRight />
        <ChevronLeft />
        <EllipsisVertical />
        </div>
        </div>
      
    <div className='podcast-results'>
           <PodcastCard />
           <PodcastCard />
           <PodcastCard />
           <PodcastCard />
           <PodcastCard />
           <PodcastCard />
           <PodcastCard />
    </div>
    </div>
 

}

export default Podcasts





