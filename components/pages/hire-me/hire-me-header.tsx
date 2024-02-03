import Link from 'next/link';
import { type FC, useState } from 'react';

import { Check, Copy } from 'lucide-react';

import { CONTACT_LINKS } from '@/lib/constants/site';

import { IconButton } from '@/components/ui';

const HireMeHeader: FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    if (!copied) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    navigator.clipboard.writeText(CONTACT_LINKS.email);
  };

  return (
    <div className="mt-0.5 flex flex-col space-y-2 px-3 text-sm text-gray-11 md:px-6 md:text-base">
      <p className="text-gray-12">
        I&apos;m available for freelance/contract work. Especially interested in:
        <ul className="ml-4 list-none">
          <li>- smart contracts/protocol development</li>
          <li>- fuzzing/invariants testing suites</li>
          <li>- formal verification campaigns</li>
        </ul>
        If you need help with any of the above, or have a project in mind, please get in touch.
      </p>
      <p>
        Kindly share as much information as possible about your project upfront. This includes
        details such as the concept, timeline, budget, scope, and any other relevant information.
        Feel free to attach links to any pertinent documents or resources.
      </p>
      <p className="relative">
        For anything else, reach me on{' '}
        <Link href={CONTACT_LINKS.twitter} target="_blank" className="font-medium hover:underline">
          Twitter
        </Link>{' '}
        or at{' '}
        <Link
          href={`mailto:${CONTACT_LINKS.email}`}
          target="_blank"
          className="font-medium hover:underline"
        >
          {CONTACT_LINKS.email}
        </Link>
        .
        <IconButton
          className="absolute bottom-0 ml-1 inline-flex"
          size="sm"
          variant="outline"
          title="Copy to clipboard"
          onClick={copyToClipboard}
          type="button"
          aria-label="Copy to clipboard"
        >
          {copied ? <Check /> : <Copy />}
        </IconButton>
      </p>
    </div>
  );
};

HireMeHeader.displayName = 'HireMeHeader';

export default HireMeHeader;
