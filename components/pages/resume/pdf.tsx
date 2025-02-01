import { FC, Fragment, useEffect, useState } from 'react';

import { Document, Link, Page, PDFViewer, Text, View } from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';

import { TW_CONFIG } from '@/lib/constants/pdf';
import { RESUME_ABOUT, RESUME_ATTRIBUTES, RESUME_TABS } from '@/lib/constants/resume';
import { CONTACT_LINKS, SITE_URL } from '@/lib/constants/site';
import { ResumeItem } from '@/lib/types/resume';
import { getDurationApprox } from '@/lib/utils/getTimePassed';

const tw = createTw(TW_CONFIG);

/* -------------------------------------------------------------------------- */
/*                                    MAIN                                    */
/* -------------------------------------------------------------------------- */

const ResumePdf: FC<{ items: Array<[string, ResumeItem[]]> }> = ({ items }) => {
  const [height, setHeight] = useState<number>(650);

  useEffect(() => {
    window.addEventListener('resize', () => setHeight(window.innerHeight));
    setHeight(window.innerHeight);

    return () => window.removeEventListener('resize', () => setHeight(window.innerHeight));
  }, []);

  return (
    <PDFViewer width="100%" height={height}>
      <Document>
        <Page
          size="A4"
          style={tw(
            'px-10 py-6 flex flex-col font-sans font-light bg-background text-primary-DEFAULT',
          )}
        >
          <Header />
          {/* WORK */}
          <Text style={tw('-mb-4 text-lg font-medium')}>work</Text>
          {items
            .map(([year, items]) => [
              year,
              items.filter((item) => RESUME_TABS['work'].includes(item.status)),
            ])
            .filter(([, items]) => items.length > 0)
            .map(([year, items]) => (
              <Category key={year as string} year={year as string} items={items as ResumeItem[]} />
            ))}
          <LastUpdated />
        </Page>
        {/* WRITING */}
        <Page
          size="A4"
          style={tw(
            'px-10 py-6 flex flex-col font-sans font-light bg-background text-primary-DEFAULT',
          )}
        >
          <Header />
          <Text style={tw('-mb-4 text-lg font-medium')}>writing</Text>
          {items
            .map(([year, items]) => [
              year,
              items.filter((item) => RESUME_TABS['writing'].includes(item.status)),
            ])
            .filter(([, items]) => items.length > 0)
            .map(([year, items]) => (
              <Category key={year as string} year={year as string} items={items as ResumeItem[]} />
            ))}
          <About />
          <LastUpdated />
        </Page>
      </Document>
    </PDFViewer>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   HEADER                                   */
/* -------------------------------------------------------------------------- */

const Header = () => (
  <View style={tw('mb-4 flex flex-row justify-between gap-2 text-xs')}>
    <View style={tw('flex flex-row gap-1')}>
      <Text style={tw('font-medium')}>polarzero</Text>
      <Text style={tw('text-gray-700')}>/</Text>
      <Text style={tw('text-muted-foreground')}>generated from</Text>
      <LinkStyled
        href={`${SITE_URL}/resume`}
        label={`${SITE_URL.replace('https://', '')}/resume`}
        style={tw('text-muted-foreground')}
      />
    </View>
    <View style={tw('flex flex-row gap-2 text-xs')}>
      <LinkStyled href={CONTACT_LINKS.twitter} label={`@${CONTACT_LINKS.twitter.split('/')[3]}`} />
      <Text style={tw('text-gray-700')}>/</Text>
      <LinkStyled
        href={CONTACT_LINKS.github}
        label={CONTACT_LINKS.github.replace('https://', '')}
      />
      <Text style={tw('text-gray-700')}>/</Text>
      <LinkStyled href={SITE_URL} label={SITE_URL.replace('https://', '')} />
    </View>
  </View>
);

/* -------------------------------------------------------------------------- */
/*                                  CATEGORY                                  */
/* -------------------------------------------------------------------------- */

const Category: FC<{ year: string; items: ResumeItem[] }> = ({ year, items }) => (
  <View key={year as string} style={tw('flex py-2 flex-col bg-gray-00 rounded-[2px]')}>
    <Text style={tw('mt-1 mb-1 -mr-4 self-end text-sm font-medium text-muted-foreground')}>
      {year as string}
    </Text>
    {(items as ResumeItem[]).map((item) => {
      const urls = Object.entries({
        website: item.websiteUrl,
        github: item.githubUrl,
        demo: item.demoUrl,
        docs: item.documentationUrl,
        article: item.articleUrl,
      }).filter(([, url]) => url);

      return (
        <View key={item.title} style={tw('mb-2 flex flex-col gap-1 text-xs')}>
          <View key={item.title} style={tw('flex flex-row justify-between gap-2')}>
            <Text>
              <Text style={tw('font-light text-muted-foreground')}>
                {RESUME_ATTRIBUTES[item.status]['labels'][item.endDate ? '1' : '0']
                  .charAt(0)
                  .toUpperCase() +
                  RESUME_ATTRIBUTES[item.status]['labels'][item.endDate ? '1' : '0'].slice(1)}
              </Text>{' '}
              <LinkStyled
                href={item.mainUrl}
                label={item.title}
                style={tw('text-primary-DEFAULT')}
              />{' '}
              {item.stack?.some((stack) => stack.name === 'FR') ? (
                <Text style={tw('text-muted-foreground')}>[FR]</Text>
              ) : null}
            </Text>
            <View style={tw('flex flex-row gap-2 text-muted-foreground')}>
              <Text>
                {getDurationApprox(item.startDate, item.endDate)} -{' '}
                {item.endDate
                  ? item.endDate.toLocaleDateString('en-US', {
                      month: 'long',
                    })
                  : 'now'}
              </Text>
            </View>
          </View>
          <View style={tw('flex flex-row gap-4')}>
            <Text style={tw('w-full text-justify leading-5')}>
              <Text>{item.description}</Text>
            </Text>
            <View style={tw('w-[180px] flex flex-row justify-end')}>
              {urls.map(([label, url], index) => (
                <Fragment key={url}>
                  <LinkStyled
                    key={url}
                    href={url as string}
                    label={label}
                    style={tw('text-muted-foreground h-3')}
                  />
                  {index !== urls.length - 1 ? (
                    <Text style={tw('text-gray-700 mx-1')}>/</Text>
                  ) : null}
                </Fragment>
              ))}
            </View>
          </View>
          {items.indexOf(item) < items.length - 1 && (
            <Text style={tw('mt-1 w-[12px] h-[1px] bg-gray-700')} />
          )}
        </View>
      );
    })}
  </View>
);

/* -------------------------------------------------------------------------- */
/*                                     ME                                     */
/* -------------------------------------------------------------------------- */

const About = () => (
  <>
    <Text style={tw('mt-4 text-lg font-medium')}>me</Text>
    <View style={tw('flex flex-col gap-2 text-xs')}>
      <Text>
        <Text style={tw('font-medium text-muted-foreground')}>name:</Text>{' '}
        <Text>{RESUME_ABOUT.name}</Text>
      </Text>
      <Text>
        <Text style={tw('font-medium text-muted-foreground')}>age:</Text>{' '}
        <Text>{RESUME_ABOUT.age.toFixed()}</Text>
      </Text>
      <Text>
        <Text style={tw('font-medium text-muted-foreground')}>location:</Text>{' '}
        <Text>{RESUME_ABOUT.locationMin}</Text>
      </Text>
    </View>
  </>
);

/* -------------------------------------------------------------------------- */
/*                                LAST UPDATED                                */
/* -------------------------------------------------------------------------- */

const LastUpdated = () => (
  <>
    <View style={tw('grow')} />
    <Text style={tw('text-xs text-muted-foreground self-end')}>
      Last updated:{' '}
      {new Date().toLocaleDateString('en-US', {
        month: 'numeric',
        year: 'numeric',
        day: 'numeric',
      })}
    </Text>
  </>
);

/* -------------------------------------------------------------------------- */
/*                                   HELPERS                                  */
/* -------------------------------------------------------------------------- */

const LinkStyled = ({ href, label, style }: { href: string; label: string; style?: unknown }) => (
  <Link href={href} style={[tw('text-primary-DEFAULT font-medium'), style || '']}>
    {label}
  </Link>
);

export default ResumePdf;
