import React from 'react';
import mainStyle from "../_styles/mainStyle";
const backgroundImage = require("../imgs/sewing_machine_sample.jpg");


const Banner = () => {
    const classes = mainStyle();
    return (
        <div className = {classes.Banner}>
            <img src={backgroundImage} alt = "A sewing maching" />
        </div>
    );
}

export default Banner;