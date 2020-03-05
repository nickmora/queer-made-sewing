import React from 'react';
import { Typography, Paper } from "@material-ui/core";
import MainStyle from "../../_styles/mainStyle";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "./main.scss"

const Events = () => {
    const classes = MainStyle();
    return (
        <div className={classes.Events}>
            <Typography
                variant="h1"
            >
                Events
            </Typography>
            <Paper className="card">
                <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]}
                    events = {[
                        {title: "Erotic Sewing Workshop", date: "2020-03-12"},
                        {title: "Welding II", date: "2020-03-21"},
                        {title: "Couple's Blacksmithing", date: "2020-03-28"}
                    ]}
                />
            </Paper>
        </div>
    );
}

export default Events;