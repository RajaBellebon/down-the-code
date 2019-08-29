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
        link: '/page-2',
      },
      {
        name: 'Wedding',
        link: '/page-3',
      },
      {
        name: 'Western australia',
        link: '/page-4',
      },
      {
        name: 'New zealand',
        link: '/page-5',
      },
      {
        name: 'Data projects',
        link: '/page-6',
      },
      {
        name: 'Blogs',
        link: '/page-7',
      },
      {
        name: 'About us',
        link: '/page-8',
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
        path: `${__dirname}/src/images/wed`,
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
