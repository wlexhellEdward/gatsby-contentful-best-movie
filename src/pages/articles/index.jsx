import React from "react";
import Layout from "@/components/layout"
import Container from "@/components/Container";
import ContainerGrid from "@/components/ContainerGrid";

import { useAllArticlesData } from "@/contentful/articles"
import CardArticle from "@/components/CardArticle";

import "./styles.scss"

function ArticlesPage() {
    const articles = useAllArticlesData()

    return (
        <Layout>
            <Container>
                <h1>Articles</h1>
                <ContainerGrid>
                    {articles.map(article => {
                        return (
                            <CardArticle key={article.slug} article={article} />
                        )
                    })}
                </ContainerGrid>
            </Container>
        </Layout>
    )
}


export default ArticlesPage
