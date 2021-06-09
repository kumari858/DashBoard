import './Navbar.css';
import  Dp from "../../images/dp.webp";
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
      <nav className="navbar">
        <div className="nav_icon" onClick={() => openSidebar()}>
          <MenuIcon />
        </div>
        <div className="navbar__left">
          <a href="#">Dashboard</a>
        </div>
        <div className="navbar__right">
          <a href="#">
            <NotificationsNoneIcon />
          </a>

          <a href="#!">
            <img width="30" src={Dp} alt="avatar" />
          </a>
          <div className= "right-most">
              <span>
              <a>
                  Direction Institute 

              </a>
              
              <ExpandMoreIcon />

              </span>
              <h6>Admin</h6>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;