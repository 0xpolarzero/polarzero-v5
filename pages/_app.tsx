import type { AppProps } from 'next/app';
import { Fira_Code, Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { type FC, useEffect } from 'react';

// import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import { DefaultSeo } from 'next-seo';
import { createConfig, http, WagmiProvider } from 'wagmi';

import '@/styles/globals.css';

import { CHAINS } from '@/lib/constants/gas-visualizer';
import { useImmersiveBg } from '@/lib/stores/useImmersiveBg';

import Entity from '@/components/canvas/entity';
import Scene from '@/components/canvas/scene';
import { Toaster } from '@/components/ui';

// -----------------------------------------------------------------------------
// RainbowKit + Wagmi config
// -----------------------------------------------------------------------------

const alchemyId = process.env.ALCHEMY_ID || '';
const chains = CHAINS.map((chain) => chain.info);

const queryClient = new QueryClient();

const wagmiConfig = createConfig({
  chains: [chains[0], ...chains.slice(1)],
  transports: Object.fromEntries(
    CHAINS.map((chain) => {
      return [
        chain.info.id,
        http(`${chain.baseRpc}${alchemyId}`, {
          name: 'Alchemy',
        }),
      ];
    }),
  ),
});

// -----------------------------------------------------------------------------
// Fonts
// -----------------------------------------------------------------------------

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin'],
});

const firaCode = Fira_Code({
  variable: '--fira-code-font',
  subsets: ['latin'],
});

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const DESCRIPTION = 'personal website';

  const path = usePathname();
  const { immersiveBg, immersiveBgControlEnabled, toggleImmersiveBg } = useImmersiveBg((state) => ({
    immersiveBg: state.enabledWithConditions,
    immersiveBgControlEnabled: state.enabled,
    toggleImmersiveBg: state.toggleWithConditions,
  }));

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    toggleImmersiveBg(isMobile, path);
  }, [path, immersiveBgControlEnabled, toggleImmersiveBg]);

  return (
    <>
      <DefaultSeo
        titleTemplate="%s | polarzero"
        defaultTitle="polarzero"
        description={DESCRIPTION}
        canonical="https://polarzero.xyz"
        themeColor="#000"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          description: DESCRIPTION,
          url: 'https://polarzero.xyz',
          site_name: 'polarzero',
        }}
        twitter={{
          handle: '@0xpolarzero',
          site: '@0xpolarzero',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'shortcut icon',
            href: '/images/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/images/apple-touch-icon.png',
            sizes: '180x180',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
        ]}
      />

      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
          --inter-font: ${inter.style.fontFamily};
          --fira-code-font: ${firaCode.style.fontFamily};
        }
      `}</style>

      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {/* <RainbowKitProvider modalSize="compact" chains={chains} theme={darkTheme()}> */}
          <div>
            <main
              className={clsx(inter.variable, firaCode.variable, immersiveBg ? '' : 'bg-gray-1')}
            >
              <Component {...pageProps} />
            </main>
            <Toaster />

            {immersiveBg ? (
              <Scene>
                <Entity />
              </Scene>
            ) : null}
          </div>
          {/* </RainbowKitProvider> */}
        </QueryClientProvider>
      </WagmiProvider>
      <Analytics />
    </>
  );
};

export default App;
