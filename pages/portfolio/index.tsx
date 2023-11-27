import type { NextPage } from 'next';

import { ChevronLeft } from 'lucide-react';
import { NextSeo } from 'next-seo';

import { CATEGORIES } from '@/lib/constants/portfolio';

import BaseLayout from '@/components/layouts/base';
import ContainerLayout from '@/components/layouts/container';
import FeaturedPortfolio from '@/components/pages/portfolio/featured-portfolio';
import FilterCategories from '@/components/templates/filter-categories';
import { Button } from '@/components/ui';

const PortfolioPage: NextPage = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          description: 'portfolio',
          url: 'https://polarzero.xyz/portfolio',
          site_name: 'polarzero',
          images: [
            {
              url: 'https://polarzero.xyz/api/og/page?title=Portfolio&description=Audit%20findings,%20bounties%20and%20research.&path=/portfolio',
              width: 1200,
              height: 630,
              alt: 'polarzero portfolio open-graph image',
            },
          ],
        }}
        twitter={{
          handle: '@0xpolarzero',
        }}
      />

      <BaseLayout subtitle="Portfolio" pageSlug="/portfolio">
        <ContainerLayout className="flex flex-col space-y-4">
          <FilterCategories categories={CATEGORIES} />
          <FeaturedPortfolio />
          <Button variant="secondary" intent="primary" href="/" leftIcon={<ChevronLeft />}>
            Return home
          </Button>
        </ContainerLayout>
      </BaseLayout>
    </>
  );
};

export default PortfolioPage;
