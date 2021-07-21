// import external modules
import React  from "react";
import avatar from 'assets/images/avatar/avatar-7.png';
import { useStateValue } from 'state';
import { sessionServices } from "helpers";
import { logout } from 'state/auth/actions';

const ThemeNavbar = () => {
  const [dispatch] = useStateValue();
  const handleLogout = async () => {
    await sessionServices.removeAccessToken();
    dispatch(logout())
  };

  return (<header className="page-topbar" id="header">
    <div className="navbar navbar-fixed">
      <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-light">
        <div className="nav-wrapper">
          <div className="header-search-wrapper hide-on-med-and-down"><i className="material-icons">search</i>
            <input className="header-search-input z-depth-2" type="text" name="Search" placeholder="Tìm kiếm"/>
          </div>
          <ul className="navbar-list right">
            <li className="hide-on-med-and-down"><a href="!#" className="waves-effect waves-block waves-light toggle-fullscreen" ><i className="material-icons">settings_overscan</i></a></li>
            <li><a href="!#" className="waves-effect waves-block waves-light profile-button" ><span className="avatar-status avatar-online"><img src={avatar} alt="avatar"/></span></a></li>
            <li><a href="!#" className="waves-effect waves-block waves-light sidenav-trigger" onClick={handleLogout}><i className="material-icons">power_settings_new</i></a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>)
}


export default ThemeNavbar;
