// @ts-nocheck
// import external modules
import React, {useState} from "react";
// Styling
import {NavLink} from 'react-router-dom';

const menus = [
    {
        id: 1,
        name: 'Home page',
        icon: 'store',
        link: '#',
        children: [

        ]
    },
]

const Sidebar = props => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = (menu) => {
        menu.active = menu.active !== 'active' ? 'active' : '';
    }


    return (<aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-dark sidenav-active-rounded">
        <div className="brand-sidebar">
            <h1 className="logo-wrapper">
                <NavLink to="/" className="brand-logo darken-1">
                    <span className="logo-text hide-on-med-and-down">Practice </span>
                </NavLink>
                <a href='!#' className="navbar-toggler"><i className="material-icons">radio_button_checked</i></a>
            </h1>
        </div>

        <ul
            className={"sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow scrollbar-primary " + (openMenu ? "open" : "close")}
            id="slide-out" data-menu="menu-navigation" data-collapsible="accordion" style={{overflowY: 'auto'}}>
            {menus.map((menu, i) => {
                const {active, link, name, children = []} = menu;
                return (
                    <li className={"bold " + active} key={i} onClick={e => toggleMenu(menu)}>
                        <a className="collapsible-header waves-effect waves-cyan " href={link}>
                            <i className="material-icons">{menu.icon}</i><span className="menu-title">{name}</span></a>
                        {children.length > 0 && <div className={"collapsible-body " + active}>
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                {children.map((child, i) => {
                                    const {link, icon, name} = child;
                                    return (
                                        <li key={i}>
                                            <NavLink to={link}>
                                                <i className="material-icons">{icon}</i>
                                                <span>{name}</span>
                                            </NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>}
                    </li>
                )
            })}
        </ul>
        <div className="navigation-background"/>
        <a href="!#"
            className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only"
            data-target="slide-out" onClick={e => setOpenMenu(!openMenu)}>
            <i className="material-icons">menu</i>
        </a>
    </aside>)
}
export default Sidebar;
