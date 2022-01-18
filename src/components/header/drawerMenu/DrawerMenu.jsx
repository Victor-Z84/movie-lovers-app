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


const useStyles = makeStyles({
    list: {
        width: 250
    }
})

function DrawerMenu () {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <div>
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
                        <ListItem button onClick={() => {}}>
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText primary={'Main page'}></ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => {}}>
                            <ListItemIcon><StarOutlineIcon/></ListItemIcon>
                            <ListItemText primary={'Favorites'}></ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => {}}>
                            <ListItemIcon><StorefrontIcon/></ListItemIcon>
                            <ListItemText primary={'Packages'}></ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => {}}>
                            <ListItemIcon><ReadMoreIcon/></ListItemIcon>
                            <ListItemText primary={'About'}></ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => {}}>
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