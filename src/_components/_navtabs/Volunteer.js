import React from 'react';
import { Typography, Paper, Card, CardContent, CardActions, Grid, Button } from "@material-ui/core";

import MainStyle from "../../_styles/mainStyle";

const Volunteer = () => {
    const [events, setEvents] = React.useState([{ title: "Erotic Sewing Workshop", date: "2020-03-12", img: "https://ae01.alicdn.com/kf/HTB1PY3QQpXXXXc_XFXXq6xXFXXXY/new-gold-shiny-perspective-lingerie-sexy-hot-erotic-tulle-fabric-cosplay-skirt-net-fabric-sewing-wedding.jpg" },
    { title: "Welding II", date: "2020-03-21", img: "https://inteng-storage.s3.amazonaws.com/img/iea/EBwmyMobw0/sizes/types-of-welding_resize_md.jpg" },
    { title: "Couple's Blacksmithing", date: "2020-03-28", img: "https://images.ctfassets.net/iugkuus37ftr/3H1LwZNQA0wi6uu2mOma4E/95ea27bac35ac511e63298aeb72c2561/RashelleBlacksmithing4-1-edited-3.jpg?w=800&h=450&fit=thumb&f=center&fl=progressive&q=80" }]);
    const classes = MainStyle();
    return (
        <div className={classes.Volunteer}>
            <Typography
                variant="h1"
            >
                Get Involved
            </Typography>
            <Paper className="card">
                <Typography
                    variant="h3"
                >
                    Upcoming events:
            </Typography>
                {events.length ?
                    <div>
                        {events.map(event => {
                            return (
                                <Card className="card">
                                    <CardContent>
                                        <Typography
                                            variant="h3"
                                            gutterBottom
                                        >
                                            {event.title}
                                        </Typography>
                                        <Grid container spacing = {2}>
                                            <Grid item sm={4}>
                                                <Paper className="card">
                                                    <img src={event.img} />
                                                </Paper>
                                            </Grid>
                                            <Grid item sm={8}>
                                                <Typography
                                                    variant="body1"
                                                    align = "justify"
                                                    paragraph
                                                >
                                                    Laudantium explicabo tempor or velit so lorem ad. Quasi beatae but magni excepteur totam adipisicing si. Minima ratione. Incididunt. Molestiae quisquam or non magni and elit consectetur, esse. Aliquip ullamco for velit for labore aperiam but numquam. Labore. Ipsam nihil yet esse and ad yet nostrud quam.

Aliquid adipisicing for nequeporro for eius so ipsam, iure yet nostrud. Voluptas ipsam cupidatat. Omnis quis si si. Omnis doloremque. Sequi veniam so aspernatur. Modi velitesse aliquid corporis, and voluptatem, yet eaque. Illum iure for sint and exercitationem lorem for velit. Fugiat consequatur or nostrud but commodi but magna for in. Tempor labore yet inventore. Iure. Ad mollit so dolor yet aliquam. Excepteur consectetur but veritatis quis. Fugiat. Laboris aliqua, yet si. Aperiam ratione. Ea error. Odit aperiam yet si. Odit reprehenderit adipisci.
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    align = "right"
                                                    paragraph
                                                >
                                                    {event.date}
                                                </Typography>
                                                <Grid container spacing={2}>
                                                    <Grid item sm={6}>
                                                        <Button
                                                            variant="contained"
                                                            fullWidth
                                                            color="primary"
                                                        >
                                                            Sign Up
                                                    </Button>
                                                    </Grid>
                                                    <Grid item sm={6}>
                                                        <Button
                                                            variant="contained"
                                                            fullWidth
                                                            color="secondary"
                                                        >
                                                            Volunteer
                                                    </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                    :
                    <p>doop</p>
                }

            </Paper>
        </div>
    );
}

export default Volunteer;