import React from 'react';
import PropTypes from "prop-types";
import {Grid, AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";

import Home from "./_navtabs/Home";
import Mission from "./_navtabs/Mission";
import Events from "./_navtabs/Events";
import Contact from "./_navtabs/Contact";
import Volunteer from "./_navtabs/Volunteer";
import History from "./_navtabs/History";

import MainStyle from "../_styles/mainStyle";


const TabPanel = (props) => {
    const {index, value, children, ...other} = props;
    return ( 
        <Typography
            component = "div"
            role = "tabpanel"
            hidden = {value !== index}
            id = {`tab-panel-${index}`}
            aria-labelledby = {`tab-panel-${index}`}
            {...other}
        >
            {value === index && <Box p = {3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children : PropTypes.node,
    index : PropTypes.any.isRequired,
    value : PropTypes.any.isRequired
}


const NavBar = () => {
    const classes = MainStyle();
    const [value, setValue] = React.useState(0);
    const handleChange = (e, newVal) => setValue(newVal);

    return ( 
        <div className = {classes.NavBar}>
            <AppBar position = "static">
                <Tabs variant = "fullWidth" value = {value} onChange = {handleChange}>
                    <Tab label = "Home" />
                    <Tab label = "Mission" />
                    <Tab label = "History" />
                    <Tab label = "Events" />
                    <Tab label = "Volunteer" />
                    <Tab label = "Contact" />
                    <Tab label = "Blog" disabled />
                </Tabs>
            </AppBar>
                <TabPanel value = {value} index = {0}>
                    <Home />
                </TabPanel>
                <TabPanel value = {value} index = {1}><Mission /></TabPanel>
                <TabPanel value = {value} index = {2}> <History /> </TabPanel>
                <TabPanel value = {value} index = {3}> <Events /> </TabPanel>
                <TabPanel value = {value} index = {4}> <Volunteer/> </TabPanel>
                <TabPanel value = {value} index = {5}> <Contact /> </TabPanel>
                <TabPanel value = {value} index = {6}>Blog</TabPanel>
        </div>
    );
}
 
export default NavBar;