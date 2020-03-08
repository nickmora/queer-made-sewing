import React from 'react';
import mainStyle from "../_styles/mainStyle";
const backgroundImage = require("../imgs/QM_logo_2.svg");


const Banner = () => {
    const classes = mainStyle();
    return (
        <div className = {classes.Banner}>
            <img src={backgroundImage} alt = "A sewing maching" />
        </div>
    );
}

export default Banner;