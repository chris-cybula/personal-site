module.exports = {
  siteMetadata: {
    title: `chris-cybula`,
    description: `chris-cybula`,
    author: `chris-cybula`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chris-cybula`,
        short_name: `chris-cybula`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/command.png`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
  pathPrefix: "/personal-site",
}
