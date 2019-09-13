import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <a className="copyright" href="https://leonidgrr.github.io"> Made by Leonid G. for beloved Wife @ 2019 </a>
        <p className="copyright">Using &copy; Gatsby Starter - Dimension. Design by: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
);

Footer.propTypes = {
    timeout: PropTypes.bool
};

export default Footer;
