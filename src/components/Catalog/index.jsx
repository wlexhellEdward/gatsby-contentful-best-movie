import React from "react";
import Container from "@/components/Container/index.jsx";
import Button from "@/components/Button";
import ContainerGrid from "@/components/ContainerGrid";
import CardMovie from "@/components/CardMovie";
import { ROUTES } from "@/constants/routes";
import { useAllMoviesData } from "@/contentful/movies";

import "./styles.scss";

const { name, link } = ROUTES[0];

const Catalog = () => {
    const movies = useAllMoviesData();

    return (
        <Container>
            <div className="headerCatalog">
                <h2>FILMS</h2>
            </div>
            <ContainerGrid>
                {movies.map((movie) => (
                    <CardMovie
                        key={movie.node.id}
                        slug={movie.node.attributes.slug}
                        title={movie.node.attributes.title}
                        release_date={movie.node.attributes.release_date}
                        poster={movie.node.attributes.poster}
                    />
                ))}
            </ContainerGrid>
            <div className="downSectionCatalog">
                <Button text={name} link={link} />
            </div>
        </Container>
    );
};

export default Catalog;
