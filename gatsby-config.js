module.exports = {
  siteMetadata: {
    title: 'James Armenta',
    description: 'James Armenta is a software engineer from San Diego, California',
    email: 'armentajames@gmail.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/md-pages`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              quality: 75,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-video',
            options: {
              width: 800,
              height: 'auto',
              preload: 'auto',
              muted: true,
              autoplay: true,
              playsinline: true,
              controls: false,
              loop: true,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/favicon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
  ],
};
