import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Eric Phifer LLC',
    siteUrl: 'https://ericphifer.com',
    description: 'Bringing Life to Your Passion',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'xgn13ezi',
        dataset: 'production',
        apiVersion: '2021-05-12',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
        useCdn: false,
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: 'xgn13ezi',
        dataset: 'production',
      },
    },
  ],
};
