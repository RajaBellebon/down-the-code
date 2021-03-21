module.exports = {
  siteMetadata: {
    title: 'Down the Code',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Nepal',
        link: '/nepal',
      },
      {
        name: 'Wedding Shooting',
        link: '/wedding-shooting',
      },
      {
        name: 'Western Australia',
        link: '/western-australia',
      },
      {
        name: 'New Zealand',
        link: '/new-zealand',
      },
      {
        name: 'Northern Territory',
        link: '/northern-territory',
      },
      {
        name: 'Borneo',
        link: '/borneo',
      },
      {
        name: 'Greece',
        link: '/greece',
      },
      {
        name: 'Israel',
        link: '/israel',
      },
      {
        name: 'Scotland',
        link: '/scotland',
      },
      {
        name: 'Bruxelles',
        link: '/bruxelles',
      },
      {
        name: 'India',
        link: '/india',
      },
      {
        name: 'About us',
        link: '/about-us',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `nepal`,
        path: `${__dirname}/src/images/nepal`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `wedding`,
        path: `${__dirname}/src/images/wedding`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `wa`,
        path: `${__dirname}/src/images/wa`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `nz`,
        path: `${__dirname}/src/images/nz`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `nt`,
        path: `${__dirname}/src/images/nt`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `india`,
        path: `${__dirname}/src/images/india`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home`,
        path: `${__dirname}/src/images/home`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bruxelles`,
        path: `${__dirname}/src/images/bruxelles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `israel`,
        path: `${__dirname}/src/images/israel`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `scotland`,
        path: `${__dirname}/src/images/scotland`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `greece`,
        path: `${__dirname}/src/images/greece`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/images/about`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    'gatsby-plugin-testing',
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#375E97',
        theme_color: '#375E97',
        display: 'minimal-ui',
        icon: 'src/images/tulec.png', // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
