import React from 'react';
import MainStyle from "../../_styles/mainStyle";
import { Paper } from "@material-ui/core";

const Home = () => {
    const classes = MainStyle();
    return (
        <div className={classes.Home}>
            <Paper className = "card">
                <img className="background-img" src="https://thehuntswoman.com/wp-content/uploads/2018/11/Dissolve_D430_35_246_600px.jpg" alt="A woman sewing" />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rnTwT-ifLkU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <form>
                    <label for="subscribe-input">Subscribe to our newsletter!</label>
                    <br />
                    <input name="subscribe-input" id="subscribe-input" />
                    <br />
                    <input type="submit" value="Subscribe!" />
                </form>
                <div className="contact">
                    <p>
                        Get in touch: <br /> Email: QueerMadeSewing@Gmail.com <br /> Phone: (206) 123-4567 <br /> Instagram: @QueerMadeSewing <br /> Storefront: 987 Pseudo Ave E <br /> Seattle, WA 98108
                </p>
                </div>
            </Paper>
        </div>
    );
}

export default Home;