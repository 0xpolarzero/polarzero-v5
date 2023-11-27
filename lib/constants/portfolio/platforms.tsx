import LogoIcon from '@/components/common/logo-icon';

export const PLATFORM_ICONS: { [key: string]: (size: number) => JSX.Element } = {
  Code4rena: (size) => <LogoIcon.Code4rena width={size} height={size} />,
  Immunefi: (size) => <LogoIcon.Immunefi width={size} height={size} />,
};
