import { graphql, useStaticQuery } from "gatsby";


export const useAllArticlesData = () => {
  const data = useStaticQuery(graphql`
    query getArticles {
      allContentfulArticle {
        edges {
          node {
            article {
              raw
            }
            slug
          }
        }
      }
    }
  `);

  return data.allContentfulArticle.edges;  
}