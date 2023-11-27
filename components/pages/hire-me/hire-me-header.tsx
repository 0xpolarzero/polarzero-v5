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
        If you would like to <span className="font-medium">integrate smart contracts</span> into
        your project, or if you need a <span className="font-medium">security review/audit</span>,
        reach out to me for a quote.
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
