Forked and modified by polarzero from [5/9 design system](https://fiveoutofnine.com).

- https://github.com/waterfall-mkt/curta.wtf

[Original repo](https://github.com/fiveoutofnine/www)

<!-- (on commit 7029233ccdc727c73e0e2f1defcdb6ce19dc0872). -->

# TODO (personal notes)

## New

[x] Use design system (see components/pages/design) navbar for blog

    - Use it to render blog posts & the navbar as a way to navigate between titles

[ ] Featured projects:

    - metaverse?
    - audits
    -> probably rather featured _audits_
    [x] create audits folder in public/ and add each audit as mdx component?
    [x] create audits in lib/constants with limited information
    -> can use mdx in portfolio/audits directly, and limited information in portfolio and featured work (with just ids)
    -> make it a component that can be passed these parameters
    [x] extend it (w/ chess?) to display in the body (such as chess) the vulnerabilities found (badges with colors) as well as analysis, and tags of the protocol functionnalities (+ and maybe separated for the kind of testing, e.g. Certora, etc)

[x] Replace any "design" with "writing"
[x] Add buttons to go back & to open in ... on blog pages

    - maybe need to create a dedicated component like external-link-button.tsx - could be used later to open audit reports on Code4rena, etc as well

[x] Add r3f background (with the different pages as well?)

    - with a switch (instead of connect wallet) to activate/disable (just return the most low level component or not) / don't return it on mobile

[x] Add hire-me page w/ contact form
[ ] Remove Medium, add social login & comments section?? + Reads, likes, etc
❌ Add description on home page?
[ ] Add different versions (history) of website (e.g. right of navbar) with dropdown and links (e.g. v. n greyed out, then v. n-1, etc with dates of release)
❌ Use Curta.wtf for table, etc

## Updates

### Components

[x] Update components/common/logo (svg)
[x] Update components/pages/home/header.tsx
[x] Update components/pages/home/featured-works (index & all works)
[x] Update PolarzeroAvatar, PolarzeroHeader, PolarzeroHoverCard
[x] Update categories in components/templates/category-tag.tsx
[x] Update logos (favicon, apple-touch, etc)

### Pages

[x] Update pages/api/og/design.tsx (of images when shared)
[x] Update pages/blog/index.tsx
[x] Update pages/index.tsx

### Lib

[x] Update lib/constants/site.tsx
[x] Update lib/types/site.ts (slugs, etc)

### Public

[x] Update public/images
[x] Update public/static

## Running Locally

```sh
git clone https://github.com/fiveoutofnine/www.git
pnpm install
pnpm run dev
```

## Pushing changes

`git merge main` (from branch)
