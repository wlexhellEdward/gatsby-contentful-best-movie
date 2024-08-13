import React, {  useState } from "react";
import { getColorByNumber, getPropertyByColor } from "@/utils/color/color";
import {  } from "gatsby-plugin-image";
import { MOVIE_ROUTE } from "@/constants/routes";
import { useAllMoviesData } from "@/contentful/movies";
import { PosterInfo } from "@/components/PosterInfo";

import "./styles.scss";
import { Link } from "gatsby";

const Slider = () => {
    const moviesSlider = useAllMoviesData();
    const fristMovie = moviesSlider[0].node;
    const [selectedMovieID, setSelectedMovieID] = useState(fristMovie.id);
    const [handleAnimation, setHandleAnimation] = useState(true);
    const [movie, setMovie] = useState(fristMovie);

    const handleSetCurrentMovie = (id) => {
        setHandleAnimation(false);
        setTimeout(() => {
            setHandleAnimation(true);
        }, 0);
        const selectedMovie =
            moviesSlider.find((movie) => movie?.node?.id === id);
        setMovie(selectedMovie.node);
        setSelectedMovieID(id);
    };

    const numberColor = Math.floor(Math.random() * 8);
    const color = getColorByNumber(numberColor);
    const property = getPropertyByColor(color);
    return (
        <div
            id="slider"
            key={selectedMovieID}
            style={property}
            className={'sliderContainer'}
        >
            {handleAnimation && (
                <div className={'sliderData'}>
                    <img
                        src={movie.attributes.poster}
                        alt={movie.attributes.title}
                        className={'image'}
                    />
                    <div className={'posterBtnContainer'}>
                        <PosterInfo
                            title={movie?.attributes?.title}
                            description={movie?.attributes?.summary}
                            running_time={movie?.attributes?.running_time}
                            wikki={movie?.attributes?.wiki}
                            rating={movie?.attributes?.rating}
                        />
                        <div className={'actionPoster'}>
                            <Link href={MOVIE_ROUTE + movie?.attributes?.slug}>
                                <div className={'OutterBtnSelectMovie'}>
                                    <span>MORE</span>
                                    <span
                                        className={'arrowSelectMovie'}
                                    >{`>`}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <div className={'pagination'}>
                {moviesSlider.map((movie) => (
                    <div
                        key={movie?.node?.id}
                        onClick={() => handleSetCurrentMovie(movie?.node?.id)}
                        className={
                            movie?.node?.id !== selectedMovieID
                                ? 'paginationPoint'
                                : 'paginationSelectedPoint'
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;


