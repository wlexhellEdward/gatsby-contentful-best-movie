import * as React from "react"
import Layout from "@/components/layout"
import Seo from "@/components/seo"
import Catalog from "@/components/Catalog"
import Slider from "@/components/Slider"



const IndexPage = () => (
    <Layout>
      <Slider />
      <Catalog />
    </Layout>
)


export const Head = () => <Seo title="Best Movie" />


export default IndexPage;
