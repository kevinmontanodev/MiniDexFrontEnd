# MiniDex Frontend
## Overview

The MiniDex frontend is built using **Astro with React components and Server-Side Rendering (SSR)**.
It follows a **Backend for Frontend (BFF)** pattern where the frontend server acts as a proxy layer between the client and the backend API.

This architecture provides several benefits:

- Centralized authentication handling
- Reduced exposure of backend endpoints
- Simplified client data fetching
- Better control of error handling and response normalization

The application is organized using a **feature-based architecture**, where each domain module encapsulates its components, hooks, services, and types.

--------------------------------------------------------------------

## Project Structure
``` text
public/ (utility images and audios)
src/
├── components/
│   ├── icons/
│   ├── skeletons/
│   ├── ui/
│   │   └── GlobalAlert.tsx
│   ├── Disclaimer.astro
│   └── Header.astro
├── const/
├── features/
│   ├── audio/
│   |   ├── hooks
|   |   |   └── useBgm.ts
│   |   ├── store
|   |   |   └── useAudioStore.ts
│   |   ├── types
|   |   |   └── audio.types.ts
│   |   └── utils
|   |       └── playSound.ts
│   ├── auth/
│   |   ├── components/
│   |   ├── hooks/
|   |   |   └── useAuth.ts
│   |   ├── services/
│   |   └── types/
│   ├── battle
│   |   ├── components/
│   |   ├── const/
│   │   ├── engine/
│   │   │   ├── helpers/
│   │   │   │   └── battle.helpers.ts
│   │   │   ├── reducers/
│   │   │   │   ├── attackReducer.ts
│   │   │   │   ├── faintReducer.ts
│   │   │   │   └── SwitchReducer.ts
│   │   │   └── battleEventReducer.ts
│   │   ├── hooks/
│   │   │   ├── useBattleActions.ts
│   │   │   ├── useBattleAnimations.ts
│   │   │   ├── useBattleTransitionAnimation.ts
│   │   │   ├── useBattleTurn.ts
│   │   │   └── useFinishBattleAnmation.ts
│   |   ├── service/
│   │   ├── store/
│   │   |   ├── useBattleStore.ts
│   │   |   └── useBattleUIStore.ts
│   |   ├── types/
│   │   └──  utils/
│   │       ├── generateMessage.ts
│   │       ├── getColorByMoveType.ts
│   │       └── getLevelProgress.ts
│   ├── packs/
│   |   ├── components/
│   |   ├── const/
│   │   ├── hooks
│   │   |   └── usePack.ts
│   |   ├── services/
│   |   └── types/
│   ├── pokedex/
│   |   ├── components/
│   |   ├── const/
│   │   ├── hooks/
│   │   │   ├── usePokedex.ts
│   │   │   ├── usePokedexInteraction.ts
│   │   │   ├── usePokemonActions.ts
│   │   │   └── usePokemonTeam.ts
│   |   ├── services/
│   │   ├── store/
│   │   │   └── usePokedexRefreshStore.ts
│   |   ├── types/
│   │   └── utils/
│   │       ├── getVisiblePages.ts
│   │       ├── typesFilters.ts
│   │       └── typesIconsUrl.ts
│   ├── shop/
│   |   ├── components/
│   │   ├── hooks/
│   │   |   └── useShop.ts
|   |   ├── services/
│   |   └── types/
│   └── trainer
│       ├── components/
│       ├── hooks/
│       │   └── useTrainer.ts
│       ├── services/
│       └── types/
├── interfaces/
├── layouts/
│   └── Layout.astro
├── pages
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login.ts
│   │   │   ├── logout.ts
│   │   │   └── register.ts
│   │   ├── battle/
│   │   │   ├── start.ts
│   │   │   ├── surrender.ts
│   │   │   ├── switch.ts
│   │   │   └── turn.ts
│   │   ├── pokedex
│   │   │       ├── evolve/
│   │   │       |   └── [pokemonId].ts
│   │   │       ├── team/
│   │   │       |   └── [pokemonId].ts
│   │   │       ├── [pokemonId].ts
│   │   │       ├── index.ts
│   │   │       └── team.ts
│   │   ├── shop/
│   │   │   ├── buy-envelope.ts
│   │   │   ├── buy-special-pokemon.ts
│   │   │   └── index.ts
│   │   └── trainer
│   │       ├── envelope.ts
│   │       ├── index.ts
│   │       └── update.ts
│   ├── shop/
│   │   └── pokeShop.astro
│   ├── trainers/
│   │   ├── battle.astro
│   │   ├── me.astro
│   │   └── pokedex.astro
│   ├── index.astro
│   └── login.astro
├── server/
│   ├── clients
│   │   ├── auth.client.ts
│   │   ├── backend.client.ts
│   │   ├── battle.client.ts
│   │   ├── pokedex.client.ts
│   │   ├── shop.client.ts
│   │   └── trainer.client.ts
│   ├── errors/
│   │   ├── handleApiError.ts
│   │   └── HttpError.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── battle.service.ts
│   │   ├── pokedex.service.ts
│   │   ├── shop.service.ts
│   │   └── trainer.service.ts
│   └── types/
│       ├── auth.types.ts
│       ├── battle.types.ts
│       ├── pokedex.types.ts
│       ├── pokemon.types.ts
│       ├── shop.types.ts
│       └── trainer.types.ts
├── pokedex/
│   ├── useAlertStore.ts
│   └── useMiniDexStore.ts
├── styles/
└── middleware.ts
```

--------------------------------------------------------------------

## Architecture

The application follows a layered structure:
```text
Client (Browser)
       │
       ▼
Astro SSR Frontend
       │
       ▼
BFF API Routes
       │
       ▼
Backend REST API
```
## Layers

### UI Layer

- Astro pages
- React components
- Feature specific components

### State & Interaction Layer

- Custom React hooks
- Zustand stores
- Local UI state

### BFF Layer

- Server services
- API route handlers
- Backend clients

### Backend Communication
- HTTP clients encapsulating backend calls
- Centralized error handling

--------------------------------------------------------------------

## Feature Based Organization

The project follows a **feature driven design** where each domain module contains its own logic.

Main feature domains:

- Authentication
- Battles
- Packs
- Pokédex
- Shop
- Trainer

Each feature typically includes:

- UI components
- React hooks
- Services
- Types
- Utilities

This modular design allows features to evolve independently while keeping responsibilities clearly separated.

---------------------------------------------------------------

## Server Side Rendering (SSR)

The application uses **SSR provided by Astro** to render pages on the server before sending them to the client.

Benefits:

- Improved SEO
- Faster initial load
- Secure handling of authentication tokens
- Server controlled data fetching

SSR also enables the **BFF pattern** used in this project.

------------------------------------------------------------------------

## Backend For Frontend (BFF)

Instead of calling the backend API directly from the browser, the application uses **Astro API routes as a BFF layer.**

Example flow:

```text
Browser
   │
   ▼
/api/battle/turn
   │
   ▼
battle.service.ts
   │
   ▼
battle.client.ts
   │
   ▼
Backend API
```

Responsibilities of the BFF layer:

- Authentication token forwarding
- Request validation
- Error normalization
- Data transformation

This design improves **security and maintainability**.

------------------------------------------------------------------------

## State Management

The project uses **Zustand stores** for shared client state.

Examples of managed state:

- Active battle state
- UI interaction state
- Pokédex refresh triggers
- Global alerts

State stores are kept minimal and focused on **UI related state**, while domain logic remains inside feature hooks and services.

------------------------------------------------------------------------

## Battle Engine

The battle system is one of the core modules of the application.

It is implemented as a **client-side event driven state machine**.

Key elements:

### Battle Events

The UI receives battle events generated by the backend and processes them through reducers.

Examples:

- Attack events
- Switch events
- Faint events
- Battle completion events

### Event Reducers

Reducers transform the current battle state based on incoming events.

Example responsibilities:

- Updating HP values
- Handling fainted Pokémon
- Switching active Pokémon
- Updating animations and messages

### Battle Hooks

Hooks coordinate UI behavior and battle interactions:

Examples:

- Turn execution
- Animation control
- Action dispatching
- Transition handling

This architecture keeps **UI logic separate from battle mechanics**.

------------------------------------------------------------------------

## Pokédex Module

The Pokédex module handles Pokémon management and team interactions.

Responsibilities include:

- Fetching Pokémon data
- Managing trainer team composition
- Handling evolutions
- Pagination and filtering

Custom hooks encapsulate all user interactions such as:

- Selecting Pokémon
- Managing teams
- Triggering evolutions

-----------------------------------------------------------------------

## Packs System

The pack system manages the acquisition and opening of Pokémon packs.

Features include:

- Pack availability
- Pack opening interactions
- Randomized Pokémon rewards

The module separates UI logic from API interactions using services and hooks.

-------------------------------------------------------------------------

## Shop Module

The shop allows trainers to purchase items such as:

- Pokémon envelopes
- Special Pokémon
- Other in-game resources

The module centralizes shop interactions using dedicated hooks and services.

-------------------------------------------------------------------------

## Trainer Module

The trainer module manages player information and progression.

Responsibilities include:

- Trainer profile
- Currency management
- Envelope rewards
- Trainer updates

-------------------------------------------------------------------------

## API Clients

The server layer contains **backend clients** responsible for communicating with the backend API.

Each domain has its own client abstraction.

Responsibilities include:

- Sending HTTP requests
- Handling authentication headers
- Normalizing responses
- Handling API errors

--------------------------------------------------------------------------

## Error Handling

Error handling is centralized in the server layer.

Two main mechanisms are used:

### Custom HTTP Errors

Used to represent backend failures in a structured way.

### API Error Handler

Transforms backend errors into consistent responses that the frontend can safely consume.

This prevents leaking backend implementation details to the client.

---------------------------------------------------------------------------

## Middleware

The middleware layer is responsible for handling cross-cutting concerns such as:

- Authentication verification
- Request preprocessing
- Protected route control

This ensures that protected pages cannot be accessed without valid authentication.

---------------------------------------------------------------------------

## UI Components

UI components are organized into reusable groups.

Examples include:

### UI Components
Reusable elements used across multiple features.

#### Icons
Shared visual elements.

#### Skeleton Components
Used to improve perceived loading performance.

#### Global Alerts
Centralized user feedback messages.

---------------------------------------------------------------------------

## Key Design Principles

The frontend architecture follows several design principles:

### Feature Isolation

Each domain module manages its own logic.

### Separation of Concerns

UI, state management, and data fetching are clearly separated.

### Server Responsibility

Sensitive operations are handled in the server layer instead of the browser.

### Scalability

The architecture supports adding new features without impacting existing modules.

-------------------------------------------------------------------------

## Summary

The MiniDex frontend combines:

- Astro SSR
- React components
- Feature-based architecture
- BFF API layer
- Event driven battle UI

This approach provides a scalable and maintainable structure suitable for complex interactive applications such as a Pokémon-style battle system.

-------------------------------------------------------------------------

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

!important : you need the backen project to use the frontend and avoid errors

## Related Repositories

Application logic and detailed documentation can be found in the following repositories:

Full Stack Aplication Repository (minidex-deploy)
https://github.com/kevinmontanodev/minidex-deploy

Backend Repository
https://github.com/kevinmontanodev/MiniDexBackend

Those repositories contain detailed documentation about:

- Full aplication stack ready to be used witch docker
- Backend architecture
- Game mechanics
- API design
- State management
