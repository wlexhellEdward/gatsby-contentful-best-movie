import React from "react";
import { Link } from "gatsby";
import { ARTICLE_ROUTE } from "@/constants/routes";


import './styles.scss'

export default function CardArticle({ article }) {
    const { slug } = article.node;

    return (
        <Link to={ARTICLE_ROUTE + slug}>
            <div className="card-arcticle">
                <p>ARTICLE</p>
                <h3>{article.node.slug}</h3>
            </div>
        </Link>
    )
}
