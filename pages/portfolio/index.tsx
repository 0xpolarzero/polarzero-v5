import type { NextPage } from 'next';
import { useEffect } from 'react';

import { ChevronLeft } from 'lucide-react';
import { NextSeo } from 'next-seo';

import { PORTFOLIO_PAGES } from '@/lib/constants/portfolio';
import { useCategoriesFilters } from '@/lib/stores/useCategoriesFilters';

import BaseLayout from '@/components/layouts/base';
import CardFeature from '@/components/layouts/card-feature';
import ContainerLayout from '@/components/layouts/container';
import FilterCategories from '@/components/templates/filter-categories';
import { Button } from '@/components/ui';
import { BadgeProps } from '@/components/ui/badge/types';

const intents: BadgeProps['intent'][] = ['none', 'primary', 'success', 'fail', 'warning', 'orange'];

const PortfolioPage: NextPage = () => {
  const { currentFilter, filter } = useCategoriesFilters((state) => ({
    currentFilter: state.currentFilter,
    filter: state.filter,
  }));

  const categories = PORTFOLIO_PAGES.map((item) => item.categories)
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((category, index) => ({
      name: category,
      intent: intents[index % intents.length],
    }));

  useEffect(() => {
    filter(null);
  }, [filter]);
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
          <FilterCategories categories={categories} />
          <div className="grid grid-cols-2 gap-4 min-[960px]:grid-cols-4">
            {PORTFOLIO_PAGES.filter((page) =>
              currentFilter ? page.categories.includes(currentFilter) : true,
            ).map((page, i) => (
              <CardFeature key={i} categoryIntents={categories} {...page} />
            ))}
          </div>
          <Button variant="secondary" intent="primary" href="/" leftIcon={<ChevronLeft />}>
            Return home
          </Button>
        </ContainerLayout>
      </BaseLayout>
    </>
  );
};

export default PortfolioPage;
