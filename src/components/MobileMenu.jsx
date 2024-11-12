import React, { Fragment, useState } from 'react';
import ListItem from "@mui/material/List";
import { NavLink } from "react-router-dom";
import './Style/style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
    },
    {
        id: 2,
        title: 'About',
        link: '/about',
    },
    {
        id: 3,
        title: 'Service',
        link: '/services',
    },
    {
        id: 4,
        title: 'Contact',
        link: '/contact',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                    </Fragment>
                                    : <NavLink className="active"
                                        to={item.link}>{item.title}</NavLink>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;