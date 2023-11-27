import type { NextRequest } from 'next/server';

import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const ORANGE_2 = 'hsl(28, 100%, 8.4%)';
const ORANGE_6 = 'hsl(24, 88.6%, 19.8%)';
const ORANGE_9 = 'hsl(24, 94.0%, 50.0%)';
const ORANGE_11 = 'hsl(24, 100%, 62.2%)';
const ORANGE_12 = 'hsl(24, 97.0%, 93.2%)';

const interRegularFontP = fetch(
  new URL('../../../public/static/fonts/Inter-Regular-Subset.otf', import.meta.url),
).then((res) => res.arrayBuffer());
const interMediumFontP = fetch(
  new URL('../../../public/static/fonts/Inter-Medium-Subset.otf', import.meta.url),
).then((res) => res.arrayBuffer());
const interSemiBoldFontP = fetch(
  new URL('../../../public/static/fonts/Inter-SemiBold-Subset.otf', import.meta.url),
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const hasCategory = searchParams.has('category');
  const hasTitle = searchParams.has('title');
  const hasSubtitle = searchParams.has('subtitle');
  const hasDescription = searchParams.get('description');

  const category = hasCategory ? `/${searchParams.get('category')}` : '/writing';
  const title = hasTitle ? searchParams.get('title') : 'Title';
  const subtitle = hasSubtitle ? searchParams.get('subtitle') : null;
  const description = hasDescription ? searchParams.get('description') : null;

  const [interRegularFont, interMediumFont, interSemiBoldFont] = await Promise.all([
    interRegularFontP,
    interMediumFontP,
    interSemiBoldFontP,
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          padding: 32,
          background: ORANGE_9,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            padding: 64,
            background: ORANGE_2,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px solid',
            borderColor: ORANGE_6,
            borderRadius: 32,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                /* alignItems: 'center', */ width: '100%',
              }}
            >
              <div
                style={{
                  fontSize: 64,
                  lineHeight: 1.2,
                  marginRight: 16,
                  color: ORANGE_11,
                  fontWeight: 500,
                }}
              >
                {title}
              </div>
              {subtitle ? (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      display: 'flex',
                      width: 40,
                      height: 40,
                      marginRight: 16,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={ORANGE_11}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                  <div
                    style={{
                      fontSize: 56,
                      lineHeight: 1.2,
                      color: ORANGE_12,
                      fontWeight: 400,
                      letterSpacing: '-0.025em',
                    }}
                  >
                    {subtitle}
                  </div>
                </div>
              ) : null}
              {/* {subtitle ? (
              ) : null} */}
            </div>
            {description ? (
              <div
                style={{
                  fontSize: 40,
                  lineHeight: 1.5,
                  width: '100%',
                  color: ORANGE_11,
                  marginTop: 32,
                  fontWeight: 400,
                }}
              >
                {description}
              </div>
            ) : null}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: 64,
                  height: 64,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 2560 2560"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    transform="translate(0.000000,2560.000000) scale(0.100000,-0.100000)"
                    fill="#fff"
                    stroke="none"
                  >
                    <rect x="0" y="0" width="25600" height="25600" fill="none" />
                    <path
                      d="M12573 17813 c-7 -2 -13 -20 -13 -38 0 -32 3 -35 43 -45 575 -144
1018 -524 1325 -1136 280 -559 447 -1276 521 -2244 40 -515 46 -715 46 -1535
0 -816 -2 -897 -45 -1465 -90 -1194 -325 -2143 -691 -2797 -170 -304 -388
-568 -616 -746 -77 -60 -93 -77 -93 -99 0 -16 3 -28 6 -28 15 0 181 45 284 77
1022 316 1776 1162 2200 2468 257 793 400 1800 400 2815 0 1406 -357 2748
-953 3589 -169 238 -384 472 -582 634 -369 301 -812 487 -1295 543 -117 13
-510 19 -537 7z"
                    />
                    <path
                      d="M12085 17581 c-1146 -249 -1962 -1447 -2285 -3359 -103 -611 -146
-1209 -137 -1917 6 -511 28 -834 88 -1290 71 -544 217 -1123 400 -1585 67
-170 215 -469 310 -625 337 -557 812 -968 1354 -1171 283 -106 539 -157 897
-178 76 -4 77 -4 86 22 8 26 6 29 -92 81 -321 170 -610 448 -824 791 -439 705
-684 1735 -767 3230 -32 581 -35 1624 -6 2105 135 2181 483 3479 1023 3812 52
32 58 39 58 69 0 39 4 38 -105 15z"
                    />
                  </g>
                </svg>
              </div>
              <div
                style={{
                  fontSize: 40,
                  lineHeight: 1.2,
                  color: ORANGE_12,
                  fontWeight: 600,
                  marginLeft: 16,
                  letterSpacing: '-0.025em',
                }}
              >
                polarzero
              </div>
            </div>
            <div
              style={{
                fontSize: 40,
                lineHeight: 1.2,
                color: ORANGE_11,
                fontWeight: 500,
              }}
            >
              {category}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interRegularFont,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Inter',
          data: interMediumFont,
          style: 'normal',
          weight: 500,
        },
        {
          name: 'Inter',
          data: interSemiBoldFont,
          style: 'normal',
          weight: 600,
        },
      ],
    },
  );
}
