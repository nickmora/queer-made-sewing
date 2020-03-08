import React from 'react';
import { Menu, MenuItem, IconButton, AppBar } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

const NavMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    return (
        <div>
            <AppBar
                position = "static"
            >
                <IconButton
                    onClick={handleClick}
                >
                    <MoreVert />
                </IconButton>
                <Menu
                    id="nav-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick = {handleClose}>Home</MenuItem>
                    <MenuItem onClick = {handleClose}>Mission</MenuItem>
                    <MenuItem onClick = {handleClose}>History</MenuItem>
                    <MenuItem onClick = {handleClose}>Events</MenuItem>
                    <MenuItem onClick = {handleClose}>Volunteer</MenuItem>
                    <MenuItem onClick = {handleClose}>Contact</MenuItem>
                    <MenuItem onClick = {handleClose}>Blog</MenuItem>
                </Menu>
            </AppBar>
        </div>
    );
}

export default NavMenu;