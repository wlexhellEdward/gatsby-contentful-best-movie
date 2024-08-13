import React, { Suspense, useEffect, useState } from "react";
import { YMaps } from "@pbe/react-yandex-maps";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
import Container from "@/components/Container";

const MapYandex = React.lazy(() => import("@/components/Map"));
const apiKey = process.env.GATSBY_API_YANDEX_MAP_KEY;

export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <Layout>
      {isClient &&
        <Container>
          <div className={'upSectionInfo'}>
            <h1>The application was created by wlex for CodeDot Test Task</h1>
          </div>
          <Suspense fallback={<div>Loading map...</div>}>
            <YMaps version={'2.1.79'} query={{ lang: "en_US", apikey: apiKey }}>
              <MapYandex />
            </YMaps>
          </Suspense>
        </Container>
      }
      {!isClient && <div>Enable JS Please...</div>}
    </Layout>
  );
}

export const Head = () => <Seo title={'About our Site'} description={'Some more info about our company and Ymaps'} />
