import type { FC } from 'react';

import { ExternalLink, Github } from 'lucide-react';

import { useImmersiveBg } from '@/lib/stores/useImmersiveBg';
import { cn } from '@/lib/utils';

import FeatureDisplayMinimal from '@/components/templates/feature-display-minimal';
import { Button } from '@/components/ui';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type FeaturedRepoFeatureProps = {
  name: string;
  description: string;
  url: string;
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const FeaturedRepoFeature: FC<FeaturedRepoFeatureProps> = ({ name, description, url }) => {
  const immersiveBg = useImmersiveBg((state) => state.enabledWithConditions);

  return (
    <FeatureDisplayMinimal
      className={cn(
        'col-span-2 w-full min-[960px]:col-span-4',
        immersiveBg
          ? 'bg-white/0 bg-clip-padding backdrop-blur-[2px] transition-all duration-100 hover:backdrop-blur-sm'
          : 'bg-gray-2',
      )}
      name={name}
      description={description}
      details="Foundry fuzzing, Halmos, Certora"
      symbol={<Github />}
      button={
        <Button size="sm" rightIcon={<ExternalLink />} href={url} newTab>
          View
        </Button>
      }
      allowWrap
    />
  );
};

FeaturedRepoFeature.displayName = 'FeaturedRepoFeature';

export default FeaturedRepoFeature;
