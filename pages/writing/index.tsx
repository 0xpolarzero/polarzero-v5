import type { NextPage } from 'next';

import { ChevronLeft } from 'lucide-react';
import { NextSeo } from 'next-seo';

import { CATEGORIES } from '@/lib/constants/writing';

import BaseLayout from '@/components/layouts/base';
import ContainerLayout from '@/components/layouts/container';
import FeaturedWriting from '@/components/pages/writing/featured-writing';
import FilterCategories from '@/components/templates/filter-categories';
import { Button } from '@/components/ui';

const WritingPage: NextPage = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          description: 'writing',
          url: 'https://polarzero.xyz/writing',
          site_name: 'polarzero',
          images: [
            {
              url: 'https://polarzero.xyz/api/og/page?title=Writing&description=Research,%20blog%20posts%20and%20threads.&path=/writing',
              width: 1200,
              height: 630,
              alt: 'polarzero writing open-graph image',
            },
          ],
        }}
        twitter={{
          handle: '@0xpolarzero',
        }}
      />

      <BaseLayout subtitle="Writing" pageSlug="/writing">
        <ContainerLayout className="flex flex-col space-y-4">
          <FilterCategories categories={CATEGORIES} />
          <FeaturedWriting />
          <Button variant="secondary" intent="primary" href="/" leftIcon={<ChevronLeft />}>
            Return home
          </Button>
        </ContainerLayout>
      </BaseLayout>
    </>
  );
};

export default WritingPage;
