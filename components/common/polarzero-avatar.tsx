import Image from 'next/image';
import type { FC } from 'react';

import avatar from '@/public/avatar.svg';

import { cn } from '@/lib/utils';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type PolarzeroAvatarProps = {
  className?: string;
  size?: number;
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const PolarzeroAvatar: FC<PolarzeroAvatarProps> = ({ className, size = 40 }) => {
  return (
    <Image
      className={cn('my-0 rounded-full border border-gray-6', className)}
      width={size}
      height={size}
      src={avatar}
      alt="polarzero avatar"
    />
  );
};

PolarzeroAvatar.displayName = 'PolarzeroAvatar';

export default PolarzeroAvatar;
