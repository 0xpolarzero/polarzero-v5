import Image from 'next/image';
import type { FC } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import avatar from '@/public/avatar.svg';

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
      className={clsx(twMerge('my-0 rounded-full border border-gray-6', className))}
      width={size}
      height={size}
      src={avatar}
      alt="polarzero avatar"
    />
  );
};

PolarzeroAvatar.displayName = 'PolarzeroAvatar';

export default PolarzeroAvatar;
