import React from 'react';
import MainStyle from "../../_styles/mainStyle";
import { Paper, useMediaQuery, Button, Input } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles"

const Home = () => {
    const theme = createMuiTheme();
    const classes = MainStyle();
    const small = useMediaQuery(theme.breakpoints.up("sm"))
    React.useEffect(() => console.log(small))
    return (
        <div className={classes.Home}>
            <Paper className="card">
                {small ?
                    <div className="big" >
                        <div className="white">
                            <div className="wrapper">
                                <iframe src="https://www.youtube.com/embed/rnTwT-ifLkU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <form>
                                <label for="subscribe-input">Subscribe to our newsletter below</label>
                                <br />
                                <Input className="card" name="subscribe-input" id="subscribe-input" />
                                <br />
                                <Button type="submit" variant="contained" color="primary"> Subscribe!</Button>
                            </form>
                            <div className="contact">
                                <p>
                                    Get in touch: <br /> Email: QueerMadeSewing@Gmail.com <br /> Phone: (206) 123-4567 <br /> Instagram: @QueerMadeSewing <br /> Storefront: 987 Pseudo Ave E <br /> Seattle, WA 98108
                            </p>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <img className="background-img" src="https://thehuntswoman.com/wp-content/uploads/2018/11/Dissolve_D430_35_246_600px.jpg" alt="A woman sewing" />
                        <div className="wrapper">
                            <iframe className="youtube" src="https://www.youtube.com/embed/rnTwT-ifLkU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <form>
                            <label for="subscribe-input">Subscribe to our newsletter below</label>
                            <br />
                            <Input className="card" name="subscribe-input" id="subscribe-input" />
                            <br />
                            <Button type="submit" variant="contained" color="primary"> Subscribe!</Button>
                        </form>
                        <div className="contact">
                            <p>
                                Get in touch: <br /> Email: QueerMadeSewing@Gmail.com <br /> Phone: (206) 123-4567 <br /> Instagram: @QueerMadeSewing <br /> Storefront: 987 Pseudo Ave E <br /> Seattle, WA 98108
                            </p>
                        </div>
                    </div>
                }
            </Paper>
        </div>
    );
}

export default Home;