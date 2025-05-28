// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
// import IconButton from "@mui/material/IconButton";
import './podcastCard.css'
import { EllipsisVertical } from 'lucide-react';

export default function PodcastCard() {
  return (
   <div className='card'>
    {/* <div className='podcast-image'> */}
    <img  className='podcast-image' src="/images/podcast.png"/>
    {/* </div> */}
    <div className='podcast-details'>
      <div  className="podcast-descr">
      <a>فنجان مع عبدالرحمن أبومالح</a>
      <a className="by">ثمانية/ thmanyah</a>
      </div>
      <EllipsisVertical />
    </div>
   </div>
  );
}
