import * as React from "react";
import ContainerGrid from "@/components/ContainerGrid";
import Container from "@/components/Container";
import CardMovie from "@/components/CardMovie";
import Seo from "@/components/seo";
import { useAllMoviesData } from "@/contentful/movies";
import Layout from "@/components/layout";

const Movies = () => {
  const movies = useAllMoviesData();

  return (
    <Layout>
      <Container>
        <h1 className="title">All Movies</h1>
        <ContainerGrid>
          {movies.map((movie) => (
            <CardMovie
              key={movie.node.id}
              title={movie.node.attributes.title}
              slug={movie.node.attributes.slug}
              poster={movie.node.attributes.poster}
              release_date={movie.node.attributes.release_date}
            />
          ))}
        </ContainerGrid>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Movies" />;

export default Movies;
