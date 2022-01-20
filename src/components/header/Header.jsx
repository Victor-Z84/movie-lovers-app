import React from "react";
import "./Header.scss";

import DrawerMenu from "../drawerMenu/DrawerMenu";
import logo from "../../icons/logo.png";
import ava from "../../icons/ava.jpg"
import Avatar from "@mui/material/Avatar";



function Header () {

    return (
        <div className="header">
            <div className="header-elements">
                <div className="header__left-part">
                    <div className="header__menu-btn">
                        <DrawerMenu/>
                    </div>
                    <div className="header__logo">
                        <img src={logo} alt="logo"/>
                        <div>
                            <p>MOVIE</p>
                            <p>LOVERS</p>
                        </div>
                    </div>
                </div>
            
                <div className="header__right-part">
                    <div className="header__login">
                        LOGOUT
                    </div>
                    <div className="header__avatar">
                        <Avatar 
                            alt="Cindy Baker" 
                            src={ava}
                            sx={{ width: 32, height: 32}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;