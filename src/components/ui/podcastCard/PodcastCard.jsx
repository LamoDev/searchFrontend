// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
// import IconButton from "@mui/material/IconButton";
import './podcastCard.css'
import { EllipsisVertical } from 'lucide-react';

export default function PodcastCard({artistName , collectionName , artworkUrl100}) {
  return (
   <div className='card'>
   
    <img  className='podcast-image' src={artworkUrl100}/>
    <div className='podcast-details'>
      <div  className="podcast-descr">
      <a>{collectionName}</a>
      <a className="by">{artistName}</a>
      </div>
      <EllipsisVertical />
    </div>
   </div>
  );
}