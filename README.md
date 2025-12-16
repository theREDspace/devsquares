# DevSquares — A CodeTV Game Show

TKTK

## Stack

- Astro
- Convex (DB + real time)
- Clerk (auth)
- React (reactive UI bits)
- Netlify (deployment + hosting)

## TODO

- [ ] Make list of Secret Square correct audience members
- [ ] Social assets for squares and contestants
- [ ] Promo strategy
- [ ] Rules + QR slide + CodetV, Will, and Jason social handles

### Known Issues (non-urgent)

- [ ] Updating squares doesn't seem to get the order right
- [ ] Formatting for updating squares is bad
- [ ] No UI for loading in questions
- [ ] No UI for adding link for the square
- [ ] No audience scoreboard


## Setup
- create clerk project (secondary app to allow subdomain)
- - need to create a JWT template for 'clerk'
- create convex project
- - need to set CLERK_JWT_ISSUER_DOMAIN env var
- create Netlify project
- `npx convex login`
- `npx convex dev` to configure the local project
- - choose existing project - devsquares-11685
- - runs local
- - also deploys to dev environment
- `npx convex deploy`

Netflify is configured to deploy Convex alongside astro front-end - custom build script

Host has "publicMetadata.role" value of "host" inside clerk