import type { FC } from 'react';

import { LucideProps } from 'lucide-react';

export const XIcon: FC<JSX.IntrinsicElements['svg']> = ({ className, ...rest }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className={className}
      {...rest}
    >
      <title>X, formerly known as Twitter</title>
      <desc>X, formerly known as Twitter&apos;s logo.</desc>
      <path
        d="M14.047 10.31 22.057 1h-1.898l-6.955 8.084L7.649 1H1.242l8.4 12.225-8.4 9.764H3.14l7.345-8.538 5.866 8.538h6.407L14.046 10.31Zm-2.6 3.023-.851-1.218L3.824 2.43H6.74l5.465 7.817.85 1.218 7.105 10.16h-2.916l-5.797-8.29v-.001Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TelegramIcon: FC<JSX.IntrinsicElements['svg']> = ({ className, ...rest }) => {
  return (
    <svg
      data-name="Social Media Icons"
      id="Social_Media_Icons"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <defs></defs>
      <path
        style={{ fill: 'currentColor' }}
        d="M477,43.86,13.32,223.29a5.86,5.86,0,0,0-.8.38c-3.76,2.13-30,18.18,7,32.57l.38.14,110.41,35.67a6.08,6.08,0,0,0,5.09-.62L409.25,120.57a6,6,0,0,1,2.2-.83c3.81-.63,14.78-1.81,7.84,7-7.85,10-194.9,177.62-215.66,196.21a6.3,6.3,0,0,0-2.07,4.17l-9.06,108a7.08,7.08,0,0,0,2.83,5.67,6.88,6.88,0,0,0,8.17-.62l65.6-58.63a6.09,6.09,0,0,1,7.63-.39l114.45,83.1.37.25c2.77,1.71,32.69,19.12,41.33-19.76l79-375.65c.11-1.19,1.18-14.27-8.17-22-9.82-8.08-23.72-4-25.81-3.56A6,6,0,0,0,477,43.86Z"
        id="Telegram"
      />
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   writing                                  */
/* -------------------------------------------------------------------------- */

export const MediumIcon: FC<JSX.IntrinsicElements['svg']> = ({
  className,
  width = '24',
  height = '24',
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 -55 256 256"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      className={className}
      {...rest}
    >
      <g>
        <path
          d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"
          fill="#FFFFFFB0"
        ></path>
      </g>
    </svg>
  );
};

export const HashnodeIcon: FC<JSX.IntrinsicElements['svg']> = ({
  className,
  width = '24',
  height = '24',
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 337 337"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z"
        fill="#FFFFFFB0"
      />
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/*                                  portfolio                                 */
/* -------------------------------------------------------------------------- */

export const PrimodiumIcon = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width={200} height={200} {...props}>
    {/* Center circles made larger */}
    <circle cx={60} cy={60} r={25} fill="#4BA3E3" />
    <circle cx={60} cy={60} r={17} fill="#7CDBFF" />

    {/* Cross in the middle */}
    <path fill="#2C394B" d="M25 53h70v14H25z" />
    <path fill="#2C394B" d="M53 25h14v70H53z" />

    {/* Side panels */}
    <path fill="#3A4B5E" d="M15 35h18v50H15zM87 35h18v50H87zM35 15h50v18H35zM35 87h50v18H35z" />
  </svg>
);

export const SavvyIcon = (props: LucideProps) => (
  <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g data-name="Layer 2">
      <g data-name="done-all">
        <path d="M16.62 6.21a1 1 0 0 0-1.41.17l-7 9-3.43-4.18a1 1 0 1 0-1.56 1.25l4.17 5.18a1 1 0 0 0 .78.37 1 1 0 0 0 .83-.38l7.83-10a1 1 0 0 0-.21-1.41z" />
        <path d="M21.62 6.21a1 1 0 0 0-1.41.17l-7 9-.61-.75-1.26 1.62 1.1 1.37a1 1 0 0 0 .78.37 1 1 0 0 0 .78-.38l7.83-10a1 1 0 0 0-.21-1.4z" />
        <path d="M8.71 13.06L10 11.44l-.2-.24a1 1 0 0 0-1.43-.2 1 1 0 0 0-.15 1.41z" />
      </g>
    </g>
  </svg>
);

export const PmndrsIcon = (props: LucideProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 800 800"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="280" y="560" width="240" height="240" fill="inherit" />
    <rect x="280" y="280" width="240" height="240" fill="inherit" />
    <rect y="280" width="240" height="240" fill="inherit" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M560 0H280V240H560V520H800V0H560Z"
      fill="inherit"
    />
  </svg>
);

export const PromiseIcon = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1100 738" {...props}>
    <g transform="scale(11.190545676357198) translate(10, 10)">
      <defs id="SvgjsDefs4750">
        <linearGradient id="SvgjsLinearGradient4755">
          <stop id="SvgjsStop4756" stop-color="#fe8dc6" offset="0" />
          <stop id="SvgjsStop4757" stop-color="#fed1c7" offset="1" />
        </linearGradient>
        <linearGradient id="SvgjsLinearGradient4758">
          <stop id="SvgjsStop4759" stop-color="#fe8dc6" offset="0" />
          <stop id="SvgjsStop4760" stop-color="#fed1c7" offset="1" />
        </linearGradient>
      </defs>
      <g
        id="SvgjsG4751"
        transform="matrix(0.09392548352479935,0,0,0.09392548352479935,0,-4.301787145080367)"
        fill="currentColor"
      >
        <g xmlns="http://www.w3.org/2000/svg">
          <path d="M587.1,45.8c-52.2,0-103.5,13.8-148.2,40.5c-43.8-25.9-95.1-40.5-147.2-40.5C130.8,45.8,0,176.5,0,337.4         c0,160.9,130.8,291.7,291.7,291.7c52,0,103.1-13.7,147.7-40.2c44.6,26.5,95.7,40.2,147.7,40.2c160.9,0,291.7-130.8,291.7-291.7         C878.8,176.5,748,45.8,587.1,45.8z M439.4,559.9c-46.1-30.9-80.6-74-100.4-123.3l113.7,113.7C448.4,553.6,443.9,556.8,439.4,559.9z          M473.4,532.7L323.8,383.2c-2.6-15-3.9-30.3-3.9-45.8c0-3.6,0.1-7.2,0.2-10.8l178.4,179.1C490.8,515.3,482.4,524.3,473.4,532.7z          M514.7,483.7L323.8,292.1c2.5-14.5,6.1-28.6,10.9-42.3l199.2,199.2C528.3,461,521.9,472.6,514.7,483.7z M544.6,421.5L345.8,222.6         c5.5-11.5,11.8-22.6,18.9-33.3l190.1,190.1C552.5,393.8,549.1,407.9,544.6,421.5z M380.9,167.4c7.9-9.6,16.5-18.7,25.8-27.3         l146.6,146.6c3.1,16.5,4.7,33.4,4.7,50.7c0,2.3,0,4.6-0.1,7L380.9,167.4z M427.6,122.8c3.7-2.8,7.6-5.5,11.5-8.2         c44.6,29.3,78.1,70.3,98,117.6L427.6,122.8z M24.5,337.4C24.5,189.7,144,70.2,291.7,70.2c44.2,0,86.6,10.3,125.1,31         c-76.2,54.6-120.4,142.1-120.4,236.2S341.6,519,416.8,573.6c-38.6,20.7-81.9,31-125.1,31C144,604.7,24.5,485.2,24.5,337.4z          M587.1,604.7c-44.2,0-86.6-10.3-125.1-31c76.2-54.6,120.4-142.1,120.4-236.2S538.2,155.8,462,101.3c38.6-20.7,80.9-31,125.1-31         c147.7,0,267.2,119.5,267.2,267.2C854.4,485.2,734.9,604.7,587.1,604.7z" />
        </g>
      </g>
    </g>
  </svg>
);

export const ChainlinkIcon = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.11 56.71" {...props}>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1" fill="currentColor">
        <path d="M24.56,12l14.18,8.14V36.5L24.6,44.69,10.43,36.57V20.22L24.56,12m0-12-5.2,3L5.2,11.22l-5.2,3V42.59l5.2,3,14.18,8.14,5.2,3,5.2-3,14.13-8.2,5.2-3V14.12l-5.2-3L29.74,3l-5.2-3Z" />
      </g>
    </g>
  </svg>
);

export const GliderIcon = (props: LucideProps) => (
  <svg width="24" height="24" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clip-path="url(#clip0_193_2)" fill="currentColor">
      <path d="M48.39 322.58H0V370.97H48.39V322.58Z" />
      <path d="M112.91 322.58H64.52V370.97H112.91V322.58Z" />
      <path d="M48.39 258.06H0V306.45H48.39V258.06Z" />
      <path d="M112.91 258.06H64.52V306.45H112.91V258.06Z" />
      <path d="M48.39 193.55H0V241.94H48.39V193.55Z" />
      <path d="M112.91 193.55H64.52V241.94H112.91V193.55Z" />
      <path d="M241.94 258.06H193.55V306.45H241.94V258.06Z" />
      <path d="M306.45 258.06H258.06V306.45H306.45V258.06Z" />
      <path d="M241.94 193.55H193.55V241.94H241.94V193.55Z" />
      <path d="M306.45 193.55H258.06V241.94H306.45V193.55Z" />
      <path d="M370.97 258.06H322.58V306.45H370.97V258.06Z" />
      <path d="M370.97 193.55H322.58V241.94H370.97V193.55Z" />
      <path d="M177.42 451.61H129.03V500H177.42V451.61Z" />
      <path d="M241.94 451.61H193.55V500H241.94V451.61Z" />
      <path d="M177.42 387.1H129.03V435.49H177.42V387.1Z" />
      <path d="M241.94 387.1H193.55V435.49H241.94V387.1Z" />
      <path d="M306.45 451.61H258.06V500H306.45V451.61Z" />
      <path d="M306.45 387.1H258.06V435.49H306.45V387.1Z" />
      <path d="M177.42 64.52H129.03V112.91H177.42V64.52Z" />
      <path d="M112.91 64.52H64.52V112.91H112.91V64.52Z" />
      <path d="M241.94 64.52H193.55V112.91H241.94V64.52Z" />
      <path d="M177.42 0H129.03V48.39H177.42V0Z" />
      <path d="M241.94 0H193.55V48.39H241.94V0Z" />
      <path d="M306.11 64.52H258.06V112.91H306.11V64.52Z" />
      <path d="M306.11 0H258.06V48.39H306.11V0Z" />
      <path d="M370.63 112.9V64.52H322.58H322.24V112.9H322.58H370.63Z" />
      <path d="M370.63 48.39V0H322.58H322.24V48.39H322.58H370.63Z" />
      <path d="M435.49 64.52H387.1V112.91H435.49V64.52Z" />
      <path d="M435.49 0H387.1V48.39H435.49V0Z" />
      <path d="M500 0H451.61V48.39H500V0Z" />
      <path d="M435.49 451.61H387.1V500H435.49V451.61Z" />
      <path d="M500 451.61H451.61V500H500V451.61Z" />
      <path d="M435.49 387.1H387.1V435.49H435.49V387.1Z" />
      <path d="M500 387.1H451.61V435.49H500V387.1Z" />
      <path d="M435.49 322.58H387.1V370.97H435.49V322.58Z" />
      <path d="M500 322.58H451.61V370.97H500V322.58Z" />
      <path d="M435.49 258.06H387.1V306.45H435.49V258.06Z" />
      <path d="M500 258.06H451.61V306.45H500V258.06Z" />
      <path d="M435.49 193.55H387.1V241.94H435.49V193.55Z" />
      <path d="M500 193.55H451.61V241.94H500V193.55Z" />
      <path d="M48.39 129.03H0V177.42H48.39V129.03Z" />
      <path d="M112.91 129.03H64.52V177.42H112.91V129.03Z" />
    </g>
    <defs>
      <clipPath id="clip0_193_2">
        <rect width="500" height="500" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
