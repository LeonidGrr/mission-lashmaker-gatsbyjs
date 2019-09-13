module.exports = {
  siteMetadata: {
    title: "Александра Гребенщикова - профессиональное наращивание и ламинирование ресниц",
    author: "Leonid G.",
    description: "Профессиональное наращивание и ламинирование ресниц от сертифицированного мастера."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
        },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'sasha-lashmaker',
        short_name: 'sasha-lashmaker',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
