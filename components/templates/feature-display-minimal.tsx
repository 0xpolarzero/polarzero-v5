import type { FC, ReactNode } from 'react';

import { cn } from '@/lib/utils';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type FeatureDisplayMinimalProps = {
  className?: string;
  name: string;
  description: string;
  symbol: ReactNode;
  button: ReactNode;
  allowWrap?: boolean;
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const FeatureDisplayMinimal: FC<FeatureDisplayMinimalProps> = ({
  className,
  name,
  description,
  symbol,
  button,
  allowWrap = false,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-xl border border-gray-6 bg-gray-2 px-4',
        allowWrap ? '' : 'h-[4.5rem]',
        className,
      )}
    >
      <div className={cn('flex', allowWrap ? 'mb-4 mt-4 items-start' : 'items-center')}>
        {/* Symbol */}
        <div
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded border border-gray-6 bg-gray-3 p-2 text-gray-11',
            allowWrap ? 'mt-[2px]' : '',
          )}
        >
          <div className="flex h-6 w-6 items-center justify-center">{symbol}</div>
        </div>
        {/* Name + description */}
        <div className="ml-2.5 mr-2">
          <div
            className={cn(
              'font-medium text-gray-12',
              allowWrap ? '' : 'line-clamp-1 text-ellipsis',
            )}
          >
            {name}
          </div>
          <div
            className={cn('text-sm text-gray-11', allowWrap ? '' : 'line-clamp-1 text-ellipsis')}
          >
            {description}
          </div>
        </div>
      </div>

      {/* Button */}
      {button}
    </div>
  );
};

export default FeatureDisplayMinimal;
