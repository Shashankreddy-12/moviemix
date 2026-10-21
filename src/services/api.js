// api.js
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_BASE_URL = "https://image.tmdb.org/t/p";

export async function getpopularmovies(){
    // console.log(import.meta.env.VITE_API_KEY)
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`
    )
    if(!response.ok) throw new Error("Error in API request");
    return response.json();
}

export async function searchmovie(searched_movie){
    // console.log(import.meta.env.VITE_API_KEY)
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${encodeURIComponent(searched_movie)}`
    )
    if(!response.ok) throw new Error("Error in API request");
    return response.json();
}