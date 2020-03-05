import React from 'react';
import MainStyle from "../_styles/mainStyle"

const Footer = () => {
    const classes = MainStyle();
    return (
        <footer className = {classes.Footer}>
            Copyright &copy; 2020, Marisa N. Morales & Queer Made Sewing LLC <br /> All Rights Reserved
        </footer>
    );
}

export default Footer;