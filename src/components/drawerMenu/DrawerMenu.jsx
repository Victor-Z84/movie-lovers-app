import { useState } from "react";
import React from "react";
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import HomeIcon from '@mui/icons-material/Home';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from "react-router-dom";

import './DrawerMenu.scss';

const useStyles = makeStyles({
    list: {
        width: 250
    },
})

const links = [
    {
        textId: "Main Page",
        url: "/main-page",
        icon: <HomeIcon/>
    },
    {
        textId: "Favourites",
        url: "/favourites",
        icon: <StarOutlineIcon/>
    },
    {
        textId: "Packages",
        url: "/packages",
        icon: <StorefrontIcon/>
    },
    {
        textId: "About",
        url: "/about",
        icon: <ReadMoreIcon/>
    },
]

function DrawerMenu () {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <div className="drawer-menu">
            <IconButton 
                edge="start"
                color="inherit"
                aria-label="open-drawer"
                onClick={() => setOpen(true)}
            >
                <MenuIcon fontSize="large"/>
            
            </IconButton>
            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => {}}
            >
                <div className={classes.list}>
                    <Box 
                        textAlign="center"
                        padding={2}
                    >
                        Menu
                    </Box>
                    <Divider/>
                    <List>
                        {links.map((link, index) => (
                            <NavLink className="nav-link"key={index} to={link.url}>
                                <ListItem className="nav-btn" button onClick={() => setOpen(false) }>
                                    <ListItemIcon>{link.icon}</ListItemIcon>
                                    <ListItemText primary={link.textId}></ListItemText>
                                </ListItem>
                            </NavLink>
                        ))}
                         <ListItem>
                            <ListItemIcon><SettingsIcon/></ListItemIcon>
                            <ListItemText primary={'Settings'}></ListItemText>
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
        </div>

    )
}

export default DrawerMenu;