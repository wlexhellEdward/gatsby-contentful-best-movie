/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */



/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
   query getMovies {
      allContentfulMovie {
        edges {
          node {
            id
            type
            attributes {
              slug
              box_office
              budget
              cinematographers
              directors
              distributors
              editors
              music_composers
              poster
              producers
              rating
              release_date
              running_time
              screenwriters
              summary
              title
              trailer
              wiki
            }
            links {
              self
            }
          }
        }
      }
    }
  `);

  const articlesResult = await graphql(`
    query getArticles {
      allContentfulArticle {
        edges {
          node {
            slug
            article {
              raw
              references {
                ... on ContentfulAsset {
                  contentful_id
                  title
                  description
                  gatsbyImageData(width: 1000)
                  __typename
                }
              }
            }
          }
        }
      }
    }       
  `)

  if (result.error) {
    throw new Error(result.error);
  }

  if (articlesResult.error) {
    throw new Error(articlesResult.error);
  }

  const moviePageTemplate = require.resolve('./src/templates/movie/index.jsx');
  const articlePageTemplate = require.resolve('./src/templates/article/index.jsx');

  articlesResult.data.allContentfulArticle.edges.forEach(({ node }) => {
    createPage({
      path: `/article/${node.slug}/`,
      component: articlePageTemplate,
      context: {
        article: node,
      },
    });
  });

  result.data.allContentfulMovie.edges.forEach(({ node }) => {
    createPage({
      path: `/movie/${node.attributes.slug}/`,
      component: moviePageTemplate,
      context: {
        movie: node,
      },
    });
  });
}
