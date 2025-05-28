import "./rightBar.css";
import { Rocket , House ,Mic, Clock, Rows3 } from 'lucide-react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RightBar = () => {
  return (
    <div className="rightBar">
    <div className="upper-taobar">
      <img className="logo" src="/images/logo.png" />
      <div className="menu">
        <ul>
        <li>
       <House />
        <a href="#" className="flex items-center gap-1">  
          الرئيسية
        </a>
      </li>
      <li>
        <Rocket />
        <a href="#" className="flex items-center gap-1">
          استكشف
        </a>
      </li>
      <li id="menu-divider">
       محتواك
      </li>
      <li>
      <Rows3 />
        <a href="#" className="flex items-center gap-1">
        قائمتي
        </a>
      </li>
      <li>
        <Mic />
        <a href="#" className="flex items-center gap-1">
          بودكاستي
        </a>
      </li>
      <li>
      <Clock />
        <a href="#" className="flex items-center gap-1">
         مؤخرًا
        </a>
      </li>
        </ul>
      </div>
      </div>
      <div className="mini-footer">
       <ul>
       <li>
        <a>
            نُبذه
        </a>
        </li>
        <li>
        <a>
            جميع الحلقات
        </a>
        </li>
        <li>
          الإصدار  v2.9.6 
        </li>
        <li>
   
   صُنع بحب <FontAwesomeIcon icon={faHeart} color="#e57058" /> بواسطة لمياء
      
        </li>
       </ul>
       </div>
      </div>
    
  );
};

export default RightBar;
