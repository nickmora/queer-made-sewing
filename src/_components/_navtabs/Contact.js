import React from 'react';
import { TextField, Typography, Checkbox, FormControlLabel, FormGroup, Button, Paper } from "@material-ui/core/";
import MainStyle from "../../_styles/mainStyle";

const Contact = () => {
    const classes = MainStyle()
    return (
        <div className={classes.Contact}>
            <Typography
                variant="h1"
            >
                Get in Touch
            </Typography>
            <Paper className="card">
                <img src="https://previews.123rf.com/images/jjfarquitectos/jjfarquitectos1905/jjfarquitectos190500126/128355579-business-man-walking-by-storefront-of-hipster-pastry-shop.jpg" alt="Hipster Storefront" />
                <Paper className="card">
                    <Typography
                        variant="h3"
                    >
                        Contact Us
                    </Typography>
                    <form action="submit">
                        <div>
                            <TextField
                                id="name"
                                placeholder="Name"
                                label="Name"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                id="email"
                                placeholder="Email"
                                label="Email"
                                fullWidth
                                type="email"
                            />
                        </div>
                        <TextField
                            id="phone-number"
                            placeholder="Phone Number"
                            label="Phone Number"
                            fullWidth
                        />
                        <div>
                            <TextField
                                id="body"
                                placeholder="Message Body"
                                label="Message Body"
                                multiline
                                fullWidth
                            />
                        </div>
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Subscribe to our Newsletter"
                            />
                        </FormGroup>
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="I'm interested in volunteering"
                            />
                        </FormGroup>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Submit
                </Button>
                    </form>
                </Paper>
                <Typography>
                    Email: QueerMadeSewing@Gmail.com <br />
                    Phone: (206) 123-4567 <br />
                    Instagram: @QueerMadeSewing <br />
                    Storefront: 987 Pseudo Ave E <br />
                    Seattle, WA 98108
                </Typography>
            </Paper>
        </div>
    );
}

export default Contact;
