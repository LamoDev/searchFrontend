import './singleEpisode.css'
import { EllipsisVertical } from 'lucide-react';

export default function SingleEpisode() {
  return (
   <div className='episode'>
    <div className='about-episode'>
    <img  className='episode-image' src="/images/aboMaleh.png"/>
    <div className='episode-descr'>
      <a>مشكلة أبومالح مع فنجان </a>
      <a className='by'>ثمانية</a>
      </div>
    </div>
    <EllipsisVertical />
    </div>
  );
}
