import "./topBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";


const TopBar = () => {




const [ menuIsOpen , setMenuIsOpen] = useState(false)


function handleClose(){
    setMenuIsOpen(false)
    
}

function handleMenu(){
    setMenuIsOpen(true)
}

  return ( 
    <div className="topbar">
      <div className="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          placeholder="هنا تلقى ما يتجاوز ٧٠ مليون بودكاست وحلقات"
        />
      </div>
      <div className="buttons-container">
      <Button variant="contained"   color="orange"> إنضم لنا</Button>
      <Button variant="outlined"   color="orange"> سجل دخول </Button>
      <IconButton color="orange" onClick={handleMenu}>
  <FontAwesomeIcon icon={faEllipsisVertical} />
   </IconButton>
      </div>
    
        <div className="content">
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={menuIsOpen}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{
                direction: 'rtl',      
                textAlign: 'right',    
              }}
          >
            <MenuItem onClick={handleClose}>الإعدادات</MenuItem>
            <MenuItem onClick={handleClose}>حول</MenuItem>
            <MenuItem onClick={handleClose}>ما الجديد ؟</MenuItem>
            <MenuItem onClick={handleClose}>الأسئلة الشائعة</MenuItem>
            <MenuItem onClick={handleClose}>الخصوصية</MenuItem>
            <MenuItem onClick={handleClose}>الشروط</MenuItem>
            <MenuItem onClick={handleClose}>التواصل والملاحظات</MenuItem>
            <MenuItem onClick={handleClose}>مسح البيانات</MenuItem>
          </Menu>
        </div>
        </div>
  );
};

export default TopBar;
