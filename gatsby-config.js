require('dotenv').config({
  path: '.env',
});

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
        name: 'Thailand',
        link: '/thailand',
      },
      {
        name: 'New Caledonia',
        link: '/new-caledonia',
      },
      {
        name: 'Paintings',
        link: '/paintings',
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
        name: 'Nasa',
        link: '/nasa-image-of-the-day',
      },
      {
        name: 'About me',
        link: '/about-me',
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
        name: `thailand`,
        path: `${__dirname}/src/images/thailand`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `new-caledonia`,
        path: `${__dirname}/src/images/new-caledonia`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `paintings`,
        path: `${__dirname}/src/images/paintings`,
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
        name: `borneo`,
        path: `${__dirname}/src/images/borneo`,
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
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 90,
          formats: ['auto', 'webp'],
          placeholder: 'blurred',
        },
      },
    },
    'gatsby-plugin-emotion',
    process.env.NODE_ENV === 'development'
      ? null
      : {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: 'gatsby-starter-default',
            short_name: 'starter',
            start_url: '/',
            background_color: '#375E97',
            theme_color: '#375E97',
            display: 'minimal-ui',
            icon: 'src/images/tulec.png',
          },
        },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ['NASA_API_KEY'],
      },
    },
  ].filter(Boolean),
};
