import { cva } from 'class-variance-authority';

export const iconButtonIconVariants = cva(['flex', 'items-center', 'justify-center'], {
  variants: {
    size: {
      sm: ['w-3', 'h-3'],
      md: ['w-4', 'h-4'],
      lg: ['w-5', 'h-5'],
      xl: ['w-6', 'h-6'],
    },
  },
});

export const iconButtonVariants = cva(
  [
    'rounded',
    'flex',
    'justify-center',
    'items-center',
    'transition-colors',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-indigo-9',
  ],
  {
    variants: {
      size: {
        sm: ['w-6', 'h-6'],
        md: ['w-8', 'h-8'],
        lg: ['w-10', 'h-10'],
        xl: ['w-12', 'h-12'],
      },
      variant: {
        primary: ['border'],
        secondary: [],
        outline: ['border'],
        ghost: [],
      },
      intent: {
        none: [
          // Primary
          'data-[variant=primary]:bg-gray-4',
          'data-[variant=primary]:dark:text-gray-12',
          'data-[variant=primary]:text-gray-11',
          'data-[variant=primary]:border-gray-7',
          'data-[variant=primary]:hover:border-gray-8',
          'data-[variant=primary]:active:bg-gray-5',
          // Secondary
          'data-[variant=secondary]:bg-gray-4',
          'data-[variant=secondary]:text-gray-11',
          'data-[variant=secondary]:hover:bg-gray-5',
          'data-[variant=secondary]:active:bg-gray-6',
          // Outline
          'data-[variant=outline]:text-gray-11',
          'data-[variant=outline]:border-gray-7',
          'data-[variant=outline]:hover:border-gray-8',
          'data-[variant=outline]:active:bg-gray-3',
          // Ghost
          'data-[variant=ghost]:text-gray-11',
          'data-[variant=ghost]:hover:bg-gray-4',
          'data-[variant=ghost]:active:bg-gray-5',
        ],
        primary: [
          // Primary
          'data-[variant=primary]:bg-indigo-9',
          'data-[variant=primary]:text-gray-12',
          'data-[variant=primary]:border-indigo-7',
          'data-[variant=primary]:hover:border-indigo-8',
          'data-[variant=primary]:active:bg-indigo-10',
          // Secondary
          'data-[variant=secondary]:bg-indigo-4',
          'data-[variant=secondary]:text-indigo-11',
          'data-[variant=secondary]:hover:bg-indigo-5',
          'data-[variant=secondary]:active:bg-indigo-6',
          // Outline
          'data-[variant=outline]:text-indigo-9',
          'data-[variant=outline]:border-indigo-7',
          'data-[variant=outline]:hover:border-indigo-8',
          'data-[variant=outline]:active:bg-indigo-3',
          // Ghost
          'data-[variant=ghost]:text-indigo-9',
          'data-[variant=ghost]:hover:bg-indigo-4',
          'data-[variant=ghost]:active:bg-indigo-5',
        ],
        success: [
          // Primary
          'data-[variant=primary]:bg-green-9',
          'data-[variant=primary]:dark:text-gray-12',
          'data-[variant=primary]:text-gray-11',
          'data-[variant=primary]:border-green-7',
          'data-[variant=primary]:hover:border-green-8',
          'data-[variant=primary]:active:bg-green-10',
          // Secondary
          'data-[variant=secondary]:bg-green-4',
          'data-[variant=secondary]:text-green-11',
          'data-[variant=secondary]:hover:bg-green-5',
          'data-[variant=secondary]:active:bg-green-6',
          // Outline
          'data-[variant=outline]:text-green-9',
          'data-[variant=outline]:border-green-7',
          'data-[variant=outline]:hover:border-green-8',
          'data-[variant=outline]:active:bg-green-3',
          // Ghost
          'data-[variant=ghost]:text-green-9',
          'data-[variant=ghost]:hover:bg-green-4',
          'data-[variant=ghost]:active:bg-green-5',
        ],
        fail: [
          // Primary
          'data-[variant=primary]:bg-red-9',
          'data-[variant=primary]:dark:text-gray-12',
          'data-[variant=primary]:text-gray-11',
          'data-[variant=primary]:border-red-7',
          'data-[variant=primary]:hover:border-red-8',
          'data-[variant=primary]:active:bg-red-10',
          // Secondary
          'data-[variant=secondary]:bg-red-4',
          'data-[variant=secondary]:text-red-11',
          'data-[variant=secondary]:hover:bg-red-5',
          'data-[variant=secondary]:active:bg-red-6',
          // Outline
          'data-[variant=outline]:text-red-9',
          'data-[variant=outline]:border-red-7',
          'data-[variant=outline]:hover:border-red-8',
          'data-[variant=outline]:active:bg-red-3',
          // Ghost
          'data-[variant=ghost]:text-red-9',
          'data-[variant=ghost]:hover:bg-red-4',
          'data-[variant=ghost]:active:bg-red-5',
        ],
        warning: [
          // Primary
          'data-[variant=primary]:bg-yellow-9',
          'data-[variant=primary]:dark:text-gray-1',
          'data-[variant=primary]:text-gray-12',
          'data-[variant=primary]:border-yellow-7',
          'data-[variant=primary]:hover:border-yellow-8',
          'data-[variant=primary]:active:bg-yellow-10',
          // Secondary
          'data-[variant=secondary]:bg-yellow-4',
          'data-[variant=secondary]:text-yellow-11',
          'data-[variant=secondary]:hover:bg-yellow-5',
          'data-[variant=secondary]:active:bg-yellow-6',
          // Outline
          'data-[variant=outline]:text-yellow-9',
          'data-[variant=outline]:border-yellow-7',
          'data-[variant=outline]:hover:border-yellow-8',
          'data-[variant=outline]:active:bg-yellow-3',
          // Ghost
          'data-[variant=ghost]:text-yellow-9',
          'data-[variant=ghost]:hover:bg-yellow-4',
          'data-[variant=ghost]:active:bg-yellow-5',
        ],
        orange: [
          // Primary
          'data-[variant=primary]:bg-orange-9',
          'data-[variant=primary]:dark:text-gray-12',
          'data-[variant=primary]:text-gray-11',
          'data-[variant=primary]:border-orange-7',
          'data-[variant=primary]:hover:border-orange-8',
          'data-[variant=primary]:active:bg-orange-10',
          // Secondary
          'data-[variant=secondary]:bg-orange-4',
          'data-[variant=secondary]:text-orange-11',
          'data-[variant=secondary]:hover:bg-orange-5',
          'data-[variant=secondary]:active:bg-orange-6',
          // Outline
          'data-[variant=outline]:text-orange-9',
          'data-[variant=outline]:border-orange-7',
          'data-[variant=outline]:hover:border-orange-8',
          'data-[variant=outline]:active:bg-orange-3',
          // Ghost
          'data-[variant=ghost]:text-orange-9',
          'data-[variant=ghost]:hover:bg-orange-4',
          'data-[variant=ghost]:active:bg-orange-5',
        ],
      },
      disabled: {
        true: 'aria-disabled cursor-not-allowed',
        false: '',
      },
    },
    compoundVariants: [
      { variant: 'primary', disabled: true, className: 'bg-gray-3 text-gray-7 border-gray-7' },
      { variant: 'secondary', disabled: true, className: 'bg-gray-9 text-gray-11' },
      { variant: 'outline', disabled: true, className: 'text-gray-7 border-gray-7' },
      { variant: 'ghost', disabled: true, className: 'bg-gray-9 text-gray-11' },
    ],
  },
);
