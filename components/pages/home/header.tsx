import type { FC } from 'react';

import { Github, Mail } from 'lucide-react';

import { CONTACT_LINKS, ORG_INFO } from '@/lib/constants/site';
import { useImmersiveBg } from '@/lib/stores/useImmersiveBg';
import { cn } from '@/lib/utils';

import LogoIcon from '@/components/common/logo-icon';
import { TelegramIcon } from '@/components/common/logo-icon/icons';
import PolarzeroAvatar from '@/components/common/polarzero-avatar';
import { Button } from '@/components/ui';

const PolarzeroHeader: FC = () => {
  const immersiveBg = useImmersiveBg((state) => state.enabledWithConditions);

  return (
    <div
      className={cn(
        'flex flex-col items-center rounded-xl border border-gray-6 p-3 md:grid md:grid-cols-[1fr_auto] md:rounded-2xl md:p-6',
        immersiveBg
          ? 'bg-white/0 bg-clip-padding backdrop-blur-[2px] transition-all duration-100 hover:backdrop-blur-sm'
          : 'bg-gray-2',
      )}
    >
      <div className="flex w-full items-center">
        {/* Avatar (desktop) */}
        <PolarzeroAvatar className="mr-4 hidden md:block" size={56} />
        {/* Avatar (mobile) */}
        <PolarzeroAvatar className="mr-2 md:hidden" size={40} />
        <div>
          <div className="text-base font-semibold md:text-2xl">polarzero</div>
          <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-base">
            <span className="font-medium">Fullstack developer</span> (TypeScript, Solidity, React,
            Swift, Postgres).
            <br />
          </span>
        </div>
      </div>

      {/* Links (desktop) */}
      <div className="hidden grid-cols-2 gap-2 md:grid">
        <Button intent="primary" href={CONTACT_LINKS.twitter} leftIcon={<LogoIcon.X />} newTab>
          Twitter
        </Button>
        <Button href={CONTACT_LINKS.github} leftIcon={<Github />} newTab>
          GitHub
        </Button>
        <div className="col-span-2 flex gap-2">
          <Button
            href={CONTACT_LINKS.telegram}
            leftIcon={<TelegramIcon />}
            className="w-full"
            newTab
          >
            Telegram
          </Button>
          <Button size="md" href={ORG_INFO.website} newTab>
            <LogoIcon.polareth className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {/* Links (mobile) */}
      <div className="mt-4 flex w-full flex-wrap gap-2 md:hidden">
        <Button size="md" intent="primary" href={CONTACT_LINKS.twitter} leftIcon={<LogoIcon.X />}>
          Twitter
        </Button>
        <Button size="md" href={CONTACT_LINKS.github} leftIcon={<Github />}>
          GitHub
        </Button>
        <Button size="md" href={CONTACT_LINKS.telegram} leftIcon={<TelegramIcon />}>
          Telegram
        </Button>
      </div>
    </div>
  );
};

PolarzeroHeader.displayName = 'PolarzeroHeader';

export default PolarzeroHeader;
