import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Container from "@/components/Container"
import Layout from "@/components/layout";
import { richTextOptions } from "@/constants/options";

import './styles.scss'

export default function ArticlePageTemplate({ pageContext }) {

    const { article } = pageContext;

    return (
        <Layout>
            <Container>
                {renderRichText(article.article, richTextOptions)}
            </Container>
        </Layout>
    )
}

