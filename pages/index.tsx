import type { NextPage } from 'next';

import { NextSeo } from 'next-seo';

import BaseLayout from '@/components/layouts/base';
import ContainerLayout from '@/components/layouts/container';
import FeaturedWorks from '@/components/pages/home/featured-works';
import PolarzeroHeader from '@/components/pages/home/header';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

// type HomePageProps = {};

// -----------------------------------------------------------------------------
// Page
// -----------------------------------------------------------------------------

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://polarzero.xyz',
          site_name: 'polarzero',
          images: [
            {
              url: 'https://polarzero.xyz/api/og/page?title=polarzero&description=Smart%20contract%20developer%20and%20security%20researcher.',
              width: 1200,
              height: 630,
              alt: 'polarzero open-graph image',
            },
          ],
        }}
        twitter={{
          handle: '@0xpolarzero',
        }}
      />

      <BaseLayout subtitle="Home" pageSlug="/">
        <ContainerLayout className="flex flex-col space-y-4">
          <PolarzeroHeader />
          <FeaturedWorks />
        </ContainerLayout>
      </BaseLayout>
    </>
  );
};

// -----------------------------------------------------------------------------
// Get static props
// -----------------------------------------------------------------------------

// export const getStaticProps: GetStaticProps = async () => {
//   const props: HomePageProps = {};
//   return { props, revalidate: 3600 };
// };

export default HomePage;
