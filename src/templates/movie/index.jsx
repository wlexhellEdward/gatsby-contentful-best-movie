import React from "react";
import { FamousPeopleCard } from "@/components/FamousPeopleCard";
import { ImageWithDescription } from "@/components/ImageWithDescription";
import { Link } from "gatsby";
import budget from "@/images/poster/budget.svg";
import view from "@/images/poster/view.png";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
import wiki from "@/images/poster/wiki.png";
import ratingImg from "@/images/poster/rating.svg";
import Container from "@/components/Container";

import "./styles.scss";

export default function MoviePageTemplate({ pageContext }) {
    const { movie } = pageContext;

    if(!movie){
        return <p>Movie loading...</p>
    }

    const { attributes } = movie;

    return (
        <Layout>
            <Container>
                <div className={'movieInfo'}>
                    <img
                        className={'imageMovie'}
                        src={attributes.poster}
                        alt={attributes.title}
                        height={600}
                        width={500}
                    />
                    <div className={'outterInfo'}>
                        <h1>{attributes.title}</h1>
                        <h5>{attributes.summary}</h5>
                        <div className={'descptionLine'}>
                            <ImageWithDescription
                                src={view}
                                text={attributes.running_time}
                            />
                            <Link href={attributes.wiki}>
                                <ImageWithDescription
                                    src={wiki}
                                    text={"Wiki"}
                                />
                            </Link>
                            <ImageWithDescription
                                src={ratingImg}
                                text={attributes.rating}
                            />
                            <ImageWithDescription
                                src={budget}
                                text={attributes.budget}
                            />
                        </div>
                        <hr className={'hr'} />
                        <div className={'wrapperFamousPeople'}>
                            <h3>Famous people involved</h3>
                            <FamousPeopleCard
                                title="Director"
                                names={attributes.directors}
                            />
                            <FamousPeopleCard
                                title="Editor"
                                names={attributes.editors}
                            />
                            <FamousPeopleCard
                                title="Music composer"
                                names={attributes.music_composers}
                            />
                            <FamousPeopleCard
                                title="Producer"
                                names={attributes.producers}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export const Head = ({pageContext}) => <Seo title={'Movie |' + ` ${pageContext.movie.attributes.title}`} description={pageContext.movie.attributes.summary}/>
