import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { Github } from 'lucide-react';
import { NextSeo } from 'next-seo';

import { RESUME_ITEMS, RESUME_TABS, WEBSITE_VERSIONS } from '@/lib/constants/resume';
import { CONTACT_LINKS } from '@/lib/constants/site';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import { useImmersiveBg } from '@/lib/stores/useImmersiveBg';
import { ResumeItem, ResumeTab } from '@/lib/types/resume';

import { TelegramIcon, XIcon } from '@/components/common/logo-icon/icons';
import ContainerLayout from '@/components/layouts/container';
import ResumeTable from '@/components/pages/resume/table';
import { Button } from '@/components/ui';

const ResumePdf = dynamic(() => import('@/components/pages/resume/pdf'), { ssr: false });

const ResumePage: NextPage = () => {
  const [tab, setTab] = useState<ResumeTab>('work');
  const [isMobile, setIsMobile] = useState(false);

  // Search params
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const isVerySmallScreen = useMediaQuery('(max-width: 440px)');
  const { immersiveBg, toggleImmersiveBg } = useImmersiveBg((state) => ({
    immersiveBg: state.enabledWithConditions,
    toggleImmersiveBg: state.toggle,
  }));

  const sortedItems: Array<[string, ResumeItem[]]> = Object.entries(
    RESUME_ITEMS({ pdf: !!params.get('pdf') }),
  )
    // Sort the years (most recent first)
    .sort((a, b) => Number(b[0]) - Number(a[0]))
    // For each year, sort the items by endDate (most recent first)
    .map(([year, items]) => {
      items.sort((a, b) => {
        // endDate is undefined if ongoing
        // If both are ongoing, sort by start date (most recent first)
        if (a.endDate === undefined && b.endDate === undefined)
          return b.startDate.getTime() - a.startDate.getTime();
        // Otherwise, sort by end date (most recent first)
        if (a.endDate === undefined) return -1;
        if (b.endDate === undefined) return 1;
        return b.endDate.getTime() - a.endDate.getTime();
      });

      return [year, items];
    });

  // Filter items with a status that matches the current tab
  const displayedItems: Array<[string, ResumeItem[]]> = useMemo(() => {
    return sortedItems.map(([year, items]) => [
      year,
      items.filter((item) => RESUME_TABS[tab].includes(item.status)),
    ]);
  }, [sortedItems, tab]);

  // Append ?pdf=true to the URL
  const showPdf = () => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set('pdf', 'true');
    router.push(`${pathname}?${newParams}`);
  };

  useEffect(() => setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), []);

  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          description: 'hire-me',
          url: 'https://polarzero.xyz/resume',
          site_name: 'polarzero',
          images: [
            {
              url: 'https://polarzero.xyz/api/og/page?title=Resume&description=Activity,%20contributions,%20research.&path=/resume',
              width: 1200,
              height: 630,
              alt: 'polarzero resume open-graph image',
            },
          ],
        }}
        twitter={{
          handle: '@0xpolarzero',
        }}
      />

      {params.get('pdf') ? (
        <ResumePdf items={sortedItems} />
      ) : (
        <>
          <div className="flex w-full items-end justify-between gap-4 bg-gray-1 px-4 py-2 md:sticky md:top-0 md:z-10 md:mx-auto md:mt-2 md:max-w-[80rem] md:px-20">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-medium">polarzero</span>
                <span>/</span>
                <span className="mr-2">resume</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  className="space-x-0 md:space-x-1"
                  variant="outline"
                  size="sm"
                  href={CONTACT_LINKS.twitter}
                  newTab
                  leftIcon={<XIcon />}
                >
                  <span className="hidden md:inline">0xpolarzero</span>
                </Button>
                <Button
                  className="space-x-0 md:space-x-1"
                  variant="outline"
                  size="sm"
                  href={CONTACT_LINKS.github}
                  newTab
                  leftIcon={<Github />}
                >
                  <span className="hidden md:inline">0xpolarzero</span>
                </Button>
                <Button
                  className="space-x-0 md:space-x-1"
                  variant="outline"
                  size="sm"
                  href={CONTACT_LINKS.telegram}
                  newTab
                  leftIcon={<TelegramIcon />}
                >
                  <span className="hidden md:inline">polarzer0</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {Object.entries(RESUME_TABS).map(([key]) => (
                <Button
                  key={key}
                  variant={tab === key ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setTab(key as ResumeTab)}
                >
                  {key === 'education' && isMobile ? 'edu' : key}
                </Button>
              ))}
              {!isVerySmallScreen ? (
                <>
                  <span className="mr-2 h-4 w-[1px] bg-gray-6" />
                  <Button variant="secondary" intent="primary" size="sm" onClick={showPdf}>
                    PDF
                  </Button>
                </>
              ) : null}
            </div>
          </div>

          <ContainerLayout className="relative flex flex-col space-y-4 md:py-6">
            {isVerySmallScreen ? (
              <Button variant="secondary" intent="primary" size="sm" onClick={showPdf}>
                PDF
              </Button>
            ) : null}
            <ResumeTable items={displayedItems} tab={tab} />
          </ContainerLayout>

          <div className="sticky bottom-0 mx-auto flex w-full max-w-[80rem] justify-between bg-gray-1 px-4 py-2 md:mb-2 md:px-20">
            {isMobile ? (
              <span />
            ) : (
              <Button
                className="hidden md:inline"
                variant={immersiveBg ? 'secondary' : 'ghost'}
                size="sm"
                onClick={toggleImmersiveBg}
              >
                particles
              </Button>
            )}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">website</span>
              {WEBSITE_VERSIONS.map((website) => (
                <Button
                  key={website.label}
                  variant="ghost"
                  size="sm"
                  href={website.url}
                  newTab
                  leftIcon={<website.icon />}
                >
                  {website.label}
                </Button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ResumePage;
