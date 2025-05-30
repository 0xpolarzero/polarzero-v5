import { useRouter } from 'next/navigation';
import { type FC, type ReactNode, useState } from 'react';

import { ArrowRight } from 'lucide-react';

import { useImmersiveBg } from '@/lib/stores/useImmersiveBg';
import { cn } from '@/lib/utils';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type FeatureDisplayProps = {
  className?: string;
  name: string;
  description: string;
  symbol: ReactNode;
  highlight?: boolean;
  tags?: ReactNode[];
  buttons?: ReactNode[];
  children: ReactNode;
  header: { url: string; internal: boolean };
  bgBase?: string;
  bgImmersive?: string;
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const FeatureDisplay: FC<FeatureDisplayProps> = ({
  className,
  name,
  description,
  symbol,
  highlight,
  tags,
  buttons,
  children,
  header,
  bgBase = 'bg-gray',
  bgImmersive = 'bg-white',
}) => {
  const router = useRouter();
  const [hovered, hover] = useState(false);

  const { immersiveBg } = useImmersiveBg((state) => ({ immersiveBg: state.enabled }));

  const handleClick = () => {
    if (header.internal) {
      router.push(header.url);
    } else {
      window.open(header.url, '_blank');
    }
  };

  return (
    <div
      className={cn(
        'flex h-max w-64 flex-col overflow-hidden rounded-xl border md:h-full',
        immersiveBg
          ? `${bgImmersive}-9/20 bg-clip-padding backdrop-blur-[2px] transition-all duration-100 hover:backdrop-blur-md`
          : '',
        className,
        highlight ? 'border-orange-6' : 'border-gray-6',
      )}
    >
      {/* Header */}
      <div
        className={cn(
          'relative flex h-[4.5rem] cursor-pointer items-center space-x-2.5 border-b border-gray-7 px-4 transition duration-200 ease-in-out',
          !immersiveBg ? (hovered ? `${bgBase}-3` : `${bgBase}-2`) : '',
        )}
        onPointerEnter={() => hover(true)}
        onPointerLeave={() => hover(false)}
        onClick={handleClick}
      >
        {/* Symbol */}
        <div className="flex h-min w-min items-center justify-center rounded border border-gray-6 bg-gray-3 p-2 text-gray-11">
          <div className="flex h-6 w-6 items-center justify-center">{symbol}</div>
        </div>
        {/* Title + subtitle */}
        <div>
          <div className="line-clamp-1 text-ellipsis font-medium text-gray-12">{name}</div>
          <div className="line-clamp-1 text-ellipsis text-sm text-gray-11">{description}</div>
          {immersiveBg ? (
            <ArrowRight
              className={cn(
                'absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-100 md:block',
                hovered ? 'opacity-12' : '',
              )}
              size={16}
            />
          ) : null}
        </div>
      </div>

      {/* Body */}
      <div
        className={cn(
          'w-full grow cursor-pointer transition duration-200 ease-in-out',
          !immersiveBg ? (hovered ? `${bgBase}-3` : `${bgBase}-2`) : '',
        )}
        onPointerEnter={() => hover(true)}
        onPointerLeave={() => hover(false)}
        onClick={handleClick}
      >
        {children}
      </div>

      {/* Footer */}
      {tags || buttons ? (
        <div
          className={cn(
            'flex h-min flex-wrap items-center justify-between border-t border-gray-6 p-2 transition duration-200 ease-in-out sm:flex-nowrap',
            !immersiveBg ? (hovered ? `${bgBase}-3` : `${bgBase}-2`) : '',
          )}
          style={{ gap: 8 }}
        >
          {/* Tags */}
          <div className="flex flex-wrap items-center" style={{ gap: 4 }}>
            {tags ? tags.map((tag) => tag) : null}
          </div>

          {/* Buttons */}
          <div className="flex gap-1">{buttons}</div>
        </div>
      ) : null}
    </div>
  );
};

export default FeatureDisplay;
