import React from 'react';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const richTextOptions = {
    renderMark: {
        [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
            const { uri } = node.data;
            return <a href={uri}>{children}</a>;
        },
        [BLOCKS.HEADING_1]: (node, children) => {
            return <h1>{children}</h1>;
        },
        [BLOCKS.HEADING_2]: (node, children) => {
            return <h2>{children}</h2>;
        },
        [BLOCKS.HEADING_3]: (node, children) => {
            return <h3>{children}</h3>;
        },
        [BLOCKS.TABLE]: (node, children) => {
            return <table border={'1px solid'}>{children}</table>
        },
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { gatsbyImageData, description } = node.data.target;
            const image = getImage(gatsbyImageData);

            if (!image) {
                return <p>Image not available</p>;
            }

            return (
                <GatsbyImage
                    class='image-article'
                    image={image}
                    alt={description || "Image"}
                />
            );
        },

    },
};
