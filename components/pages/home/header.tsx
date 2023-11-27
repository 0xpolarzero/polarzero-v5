import type { FC } from 'react';

import { Github, Twitter } from 'lucide-react';

import PolarzeroAvatar from '@/components/common/polarzero-avatar';
import { Button } from '@/components/ui';

const PolarzeroHeader: FC = () => {
  return (
    <div className="flex flex-col items-center rounded-xl border border-gray-6 bg-gray-2 p-3 md:flex-row md:justify-between md:rounded-2xl md:p-6">
      <div className="flex w-full items-center">
        {/* Avatar (desktop) */}
        <PolarzeroAvatar className="mr-4 hidden md:block" size={56} />
        {/* Avatar (mobile) */}
        <PolarzeroAvatar className="mr-2 md:hidden" size={40} />
        <div>
          <div className="text-base font-semibold md:text-2xl">polarzero</div>
          <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-base">
            Smart contract <span className="font-medium">developer</span> and{' '}
            <span className="font-medium">security researcher</span>.<br />
            Fuzzing and formal verification.
          </span>
        </div>
      </div>

      {/* Links (desktop) */}
      <div className="hidden space-x-2 md:flex">
        <Button
          intent="primary"
          href="https://twitter.com/0xpolarzero"
          leftIcon={<Twitter />}
          newTab
        >
          Twitter
        </Button>
        <Button href="https://github.com/0xpolarzero" leftIcon={<Github />} newTab>
          GitHub
        </Button>
      </div>
      {/* Links (mobile) */}
      <div className="mt-4 flex w-full space-x-2 md:hidden">
        <Button
          size="md"
          intent="primary"
          className="w-full"
          href="https://twitter.com/0xpolarzero"
          leftIcon={<Twitter />}
        >
          Twitter
        </Button>
        <Button
          size="md"
          className="w-full"
          href="https://github.com/0xpolarzero"
          leftIcon={<Github />}
        >
          GitHub
        </Button>
      </div>
    </div>
  );
};

PolarzeroHeader.displayName = 'PolarzeroHeader';

export default PolarzeroHeader;
