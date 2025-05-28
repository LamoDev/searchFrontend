import "./topBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPodcasts, resetPodcasts, searchResult } from "../store/resultsApiSlice";


const TopBar = () => {
  const dispatch = useDispatch();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [placeholderText, setPlaceholderText] = useState("هنا تلقى ما يتجاوز ٧٠ مليون بودكاست وحلقات");

  useEffect(() => {
    dispatch(searchResult('فنجان'));
  }, [dispatch]);

  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth <= 480) {
        setPlaceholderText("ابحث عن محتوى...");
      } else {
        setPlaceholderText("هنا تلقى ما يتجاوز ٧٠ مليون بودكاست وحلقات");
      }
    };

    updatePlaceholder(); 
    window.addEventListener("resize", updatePlaceholder);

    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);


function handleClose(){
    setMenuIsOpen(false)
    
}

function handleMenu(){
    setMenuIsOpen(true)
}

  return ( 
    <div className="topbar">
      <img src="/images/logo.png" alt="Logo" className="logo" style={{ objectFit: 'contain' }} />
      <div className="search">
        <FontAwesomeIcon 
          icon={faMagnifyingGlass} 
          onClick={() => searchTerm.trim() && dispatch(fetchPodcasts(searchTerm.trim()))} 
          style={{ cursor: 'pointer' }}
        />
        <input
          type="text"
          placeholder={placeholderText}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(searchResult(searchTerm));
              dispatch(resetPodcasts());
              dispatch(fetchPodcasts(searchTerm));
            }
          }}
        />
      </div>
      <div className="buttons-container">
        <Button variant="contained" color="orange">إنضم لنا</Button>
        <Button variant="outlined" color="orange">سجل دخول</Button>
        <IconButton 
          color="orange" 
          onClick={handleMenu}
          aria-controls={menuIsOpen ? 'menu' : undefined}
          aria-haspopup="true"
          aria-expanded={menuIsOpen ? 'true' : undefined}
        >
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={menuIsOpen}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          PaperProps={{
            sx: {
              mt: -1
            }
          }}
          sx={{
            direction: 'rtl',
            textAlign: 'right',
            position: 'absolute',
            zIndex: 2000, 
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
