import type { NextPage } from 'next';

import { ChevronLeft } from 'lucide-react';
import { NextSeo } from 'next-seo';

import BaseLayout from '@/components/layouts/base';
import ContainerLayout from '@/components/layouts/container';
import HireMeForm from '@/components/pages/hire-me/hire-me-form';
import HireMeHeader from '@/components/pages/hire-me/hire-me-header';
import { Button } from '@/components/ui';

const HireMePage: NextPage = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          description: 'hire-me',
          url: 'https://polarzero.xyz/hire-me',
          site_name: 'polarzero',
          images: [
            {
              url: 'https://polarzero.xyz/api/og/page?title=Hire%20me&description=Hire%20me%20to%20work%20on%20smart%20contracts%20or%20to%20review%20an%20existing%20system.&path=/hire-me',
              width: 1200,
              height: 630,
              alt: 'polarzero hire-me open-graph image',
            },
          ],
        }}
        twitter={{
          handle: '@0xpolarzero',
        }}
      />

      <BaseLayout subtitle="Hire me" pageSlug="/hire-me">
        <ContainerLayout className="flex flex-col space-y-4">
          <HireMeHeader />
          <HireMeForm />
          <Button variant="secondary" intent="primary" href="/" leftIcon={<ChevronLeft />}>
            Return home
          </Button>
        </ContainerLayout>
      </BaseLayout>
    </>
  );
};

export default HireMePage;
