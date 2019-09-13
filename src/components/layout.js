import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                title
                }
            }
        }
    `)

    let content;

    if (location && location.pathname === '/') {
        content = (
        <div>
            {children}
        </div>
        )
    } else {
        content = (
        <div id="wrapper" className="page">
            <div>
            {children}
            </div>
        </div>
        )
    }

    return (
        <>
            <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                { name: 'description', content: 'Профессиональное наращивание и ламинирование ресниц' },
                { name: 'keywords', content: 'наращивание ресниц, ламинирование ресниц' },
                ]}
            >
                <html lang="ru" />
            </Helmet>
            {content}
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
