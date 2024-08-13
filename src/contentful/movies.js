import { graphql, useStaticQuery } from "gatsby";


export const useAllMoviesData = () => {
  const data = useStaticQuery(graphql`
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

  return data.allContentfulMovie.edges;  
}