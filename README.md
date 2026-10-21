# MovieMix

MovieMix is a responsive movie-discovery web application built with React. Users can browse currently popular movies, search the TMDB catalogue, and maintain a personal favourites list that persists in their browser.

**Live demo:** [moviemix-one.vercel.app](https://moviemix-one.vercel.app/)

## Highlights

- Browse popular movies fetched from The Movie Database (TMDB) API.
- Search movies with query parameters reflected in the URL, making searches shareable and refresh-safe.
- Add and remove favourites with persistence via `localStorage`.
- Navigate between the Home and Favourites views with React Router.
- Deploy as a Vite single-page application on Vercel, including a route rewrite for direct visits to `/favourites`.

## Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | React 19, JavaScript, JSX |
| Build tooling | Vite |
| Routing | React Router |
| State | React Context and hooks |
| Data source | TMDB API |
| Deployment | Vercel |

## Architecture Notes

- API requests are isolated in [`src/services/api.js`](src/services/api.js).
- `FavContext` provides favourites state to the component tree, while `localStorage` keeps it available after refreshes.
- Search state is stored in the URL through `useSearchParams`, rather than only in component state.
- [`vercel.json`](vercel.json) rewrites requests to `index.html`, allowing Vercel to serve React Router routes correctly on direct navigation.

## Run Locally

### Prerequisites

- Node.js 20.19+ or 22.12+
- A TMDB API key

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Shashankreddy-12/moviemix.git
   cd moviemix
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:

   ```env
   VITE_API_KEY=your_tmdb_api_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown by Vite, usually `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deployment

MovieMix is configured for Vercel:

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Required environment variable: `VITE_API_KEY`

Vercel automatically installs dependencies using the committed `package-lock.json`. Set `VITE_API_KEY` for both Production and Preview deployments before deploying.

## Data Attribution

This product uses the TMDB API but is not endorsed or certified by TMDB. Movie metadata and imagery are provided by [The Movie Database](https://www.themoviedb.org/).

## License

Distributed under the [MIT License](LICENSE).
