import { type FC, Fragment, useEffect, useState } from 'react';

import Logo from './logo';

import { NAVBAR_PAGES } from '@/lib/constants/site';
import type { PageSlug } from '@/lib/types/site';
import { cn } from '@/lib/utils';

import ImmersiveSwitch from '@/components/common/immersive-switch';
import { Button, IconButton, Tooltip } from '@/components/ui';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type NavBarProps = {
  selected?: PageSlug;
  external?: boolean;
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const NavBar: FC<NavBarProps> = ({ selected, external }) => {
  return (
    <Fragment>
      <DesktopNavBar selected={selected} external={external} />
      <MobileNavBar selected={selected} />
    </Fragment>
  );
};

const DesktopNavBar: FC<NavBarProps> = ({ selected, external }) => {
  return (
    <nav
      className={cn(
        'pointer-events-auto z-popover hidden h-12 items-center border-b border-gray-6 bg-white px-4 dark:bg-black md:flex',
        external ? '' : 'sticky top-0',
      )}
    >
      <Logo />
      {external
        ? null
        : NAVBAR_PAGES.map((page) => {
            const pageSelected = selected === page.slug;

            return (
              <Button
                key={page.slug}
                className={cn('ml-2', pageSelected ? 'cursor-default bg-gray-4' : '')}
                variant="ghost"
                href={page.slug}
                disabled={pageSelected}
              >
                {page.name}
              </Button>
            );
          })}
      <div className="flex-grow" />
      {external ? null : <ImmersiveSwitch />}
    </nav>
  );
};

const MobileNavBar: FC<NavBarProps> = ({ selected, external }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  const isMobile = isMounted ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) : false;

  return (
    <nav className="pointer-events-auto sticky top-0 z-popover flex h-12 items-center border-b border-gray-6 bg-white px-4 dark:bg-black md:hidden">
      <Logo />
      {external
        ? null
        : NAVBAR_PAGES.map((page) => {
            const pageSelected = selected === page.slug;

            return (
              <Tooltip key={page.slug} content={page.name}>
                <IconButton
                  className={cn('ml-2', pageSelected ? 'cursor-default bg-gray-4' : '')}
                  variant="ghost"
                  href={page.slug}
                  disabled={pageSelected}
                >
                  {page.icon}
                </IconButton>
              </Tooltip>
            );
          })}
      <div className="flex-grow" />
      {!isMobile && !external ? <ImmersiveSwitch /> : null}
    </nav>
  );
};

export default NavBar;
