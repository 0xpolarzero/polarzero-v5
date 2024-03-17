import { Font } from '@react-pdf/renderer';
import { Config } from 'tailwindcss';

// Register pdf fonts
Font.register({
  family: 'Inter',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.ttf',
      fontWeight: 'normal',
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZg.ttf',
      fontWeight: 'thin',
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZg.ttf',
      fontWeight: 'medium',
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZg.ttf',
      fontWeight: 'semibold',
    },
  ],
});

// Custom fine-tuned Tailwind config for react-pdf-tailwind
export const TW_CONFIG: Omit<Config, 'content'> = {
  // shadcn/ui
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      colors: {
        background: 'hsl(0 0% 0%)',
        foreground: 'hsl(213 31% 91%)',
        primary: {
          DEFAULT: 'hsl(210 40% 98%)',
          foreground: 'hsl( 222.2 47.4% 1.2%)',
        },
        secondary: {
          DEFAULT: 'hsl(222.2 47.4% 11.2%)',
          foreground: 'hsl(210 40% 98%)',
        },
        muted: {
          DEFAULT: 'hsl(223 47% 11%)',
          foreground: 'hsl(215.4 16.3% 56.9%)',
        },
        accent: {
          DEFAULT: 'hsl(216 34% 17%)',
          foreground: 'hsl(210 40% 98%)',
        },
      },
    },
  },
};
