# nuzlocker.app

This is a side project designed to be a [Pokémon Nuzlocke](https://bulbapedia.bulbagarden.net/wiki/Nuzlocke_Challenge) Tracker for people who enjoy Pokémon but want to remember their progress.

Ideally this will become a tool useful for people who stream on Twitch.tv and play Pokémon Nuzlockes and want to have their audience know what happened to their favorite meme, or be a way for people to track their journeys.

This repo is only the Frontend aspect of it. This is a work in progress as well as a sandbox for new technologies.

## Tech Stack

- Next.js
  - Used for the UI as well as caching serverside progress.
  - Both SSR and SSG will be used
    - SSG will be used to supply the Pokédex/Bulbapedia reference by using the [Pokémon OpenAPI](https://pokeapi.co/)
    - SSR will be used for SEO and prefilling data that can be easily templated (user profiles, runs, etc)
- UI/UX
  - Tailwind CSS is used to quickly build UI in the shortterm and to provide easy Dark Theme
  - Chakra UI is used for the "Functional" components such as menus, action components, etc
  - Some custom components are developed on an as-needed basis
- Hosting
  - In the short term, this project is being hosted with [Netlify](https://netlify.com)
  - In the long term, this will either be hosted with Vercel, or AWS Elastic Beanstalk or Amplify
- Backend
  - Aside from the data publicly available with the Pokémon OpenAPI, user data and services are going to be developed at a later date.
  - Not sure when this will happen, but will likely be built using either TypeScript + Express to keep consistent with the TypeScript frontend.

## Getting Started

First, run the development server (note that I changed the default Next commands):

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
