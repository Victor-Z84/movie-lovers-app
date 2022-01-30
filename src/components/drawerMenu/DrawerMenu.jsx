import React, { useState } from "react";
import { withTranslator } from "../../hoc/withTranslator";
import { withTheme } from "../../hoc/withTheme"
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
import GTranslateIcon from '@mui/icons-material/GTranslate';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import { NavLink } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

import './DrawerMenu.scss';

const useStyles = makeStyles({
    list: {
        width: 250
    },
})

const links = [
    {
        textId: "menu.links.main",
        url: "/main-page",
        icon: <HomeIcon/>
    },
    {
        textId: "menu.links.favourites",
        url: "/favourites",
        icon: <StarOutlineIcon/>
    },
    {
        textId: "menu.links.packages",
        url: "/packages",
        icon: <StorefrontIcon/>
    },
    {
        textId: "menu.links.about",
        url: "/about",
        icon: <ReadMoreIcon/>
    },
]

function DrawerMenu ( { translate, ...props } ) {
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
                        {translate("menu.menu")} 
                        
                    </Box>
                    <Divider/>
                    <List className="drawer-menu__list">
                        {links.map((link, index) => (
                            <NavLink className="drawer-menu__link"key={index} to={link.url} style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.64)' }}>
                                <ListItem className="drawer-menu__btn" button onClick={() => setOpen(false) }>
                                    <ListItemIcon>{link.icon}</ListItemIcon>
                                    <ListItemText primary={translate(link.textId)}></ListItemText>
                                </ListItem>
                            </NavLink>
                        ))}
                        <Divider/>
                         <ListItem>
                            <ListItemIcon><SettingsIcon/></ListItemIcon>
                            <ListItemText primary={translate('menu.links.settings')} style={{ color: 'rgba(0, 0, 0, 0.64)' }}></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><GTranslateIcon/></ListItemIcon>
                            <ListItemText primary={translate('menu.links.language')} style={{ color: 'rgba(0, 0, 0, 0.64)' }}></ListItemText>
                            <ButtonGroup size="small" variant="outlined" style={{ color: 'rgba(0, 0, 0, 0.64)' }} aria-label="outlined primary button group">
                                <Button style={{ color: 'rgba(0, 0, 0, 0.64)' }} onClick={() => props.setLanguage("ru")}>
                                    RU
                                </Button>
                                <Button style={{ color: 'rgba(0, 0, 0, 0.64)' }} onClick={() => props.setLanguage("en")}>
                                    EN
                                </Button>
                            </ButtonGroup>
                        </ListItem>
                        <ListItem className="nav-link-theme">
                            <ListItemIcon><SettingsBrightnessIcon/></ListItemIcon>
                            <ListItemText primary={translate("menu.links.theme")} style={{ color: 'rgba(0, 0, 0, 0.64)' }}></ListItemText>
                            <Button onClick={() => props.toggleTheme()}
                                size="small"
                                variant="outlined"
                                color="primary"
                            >
                                <NightlightRoundIcon style={{ color: 'rgba(0, 0, 0, 0.54)' }} />|<LightModeIcon style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                            </Button>
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
        </div>

    )
}

export default withTheme(withTranslator(DrawerMenu));