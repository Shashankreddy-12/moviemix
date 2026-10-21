import "../css/Favourites.css"
import { useContext } from "react"
import { FavContext } from "../context/favcontext";
import Moviecard from "./Movie-card";

export default function Favourites(){
    const favourites=useContext(FavContext);

    function displafavmovies(){
        return (
            favourites.fav.map(movie=>(
                <Moviecard movie={movie} key={movie.id}/>
            ))
        )
    }
    return (
        <div className="favourites">
            <h1>Your Favourites</h1>

            {(!favourites.fav.length) ?
                <div className="favourites-empty">
                    <p>You haven't added any favourites yet.</p>
                </div>
            :
                <div className="m-grid">
                    {displafavmovies()}
                </div>
            }
        </div>
    )
}