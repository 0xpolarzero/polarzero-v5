import type { FC } from 'react';

import { Check, X } from 'lucide-react';

import { useImmersiveBg } from '@/lib/stores/useImmersiveBg';

import { Button, Tooltip } from '@/components/ui';

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const ImmersiveSwitch: FC = () => {
  const { immersiveBgEnabled, toggleImmersiveBg } = useImmersiveBg((state) => ({
    immersiveBgEnabled: state.enabled,
    toggleImmersiveBg: state.toggle,
  }));

  return (
    <Tooltip
      content={immersiveBgEnabled ? 'Disable immersive background' : 'Enable immersive background'}
    >
      <Button
        size="sm"
        variant="secondary"
        intent={immersiveBgEnabled ? 'primary' : 'warning'}
        className=""
        onClick={toggleImmersiveBg}
      >
        {immersiveBgEnabled ? <Check size={16} /> : <X size={16} />}
      </Button>
    </Tooltip>
  );
};

ImmersiveSwitch.displayName = 'ImmersiveSwitch';

export default ImmersiveSwitch;
