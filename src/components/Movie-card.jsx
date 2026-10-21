//Movie-card.jsx
import "../css/Movie-card.css"
import { FaRegHeart } from "react-icons/fa";
import { IMG_BASE_URL } from "../services/api"
import { useContext } from "react";
import { FavContext } from "../context/favcontext";

export default function Moviecard(props){
    // const [isfav,setisfav] = useState(false);  //wrong approach to use state for this isfav
    let imgurl=`${IMG_BASE_URL}/w500${props.movie.poster_path}`
    const favourites=useContext(FavContext);
    const isfav=favourites.fav.some(moviefav=> moviefav.id===props.movie.id);
    function handlefav(){
        
        if(!isfav){

            favourites.setfav(prevfav=> ([
                ...prevfav,
                props.movie
            ]))
        }else{
            favourites.setfav(
                favourites.fav.filter(favmovie => favmovie.id !== props.movie.id)
            )
        }
    }
    return (
        <div className="m-card">
            <div className="m-poster">
                <img src={imgurl} alt={props.movie.title} />
                <button onClick={handlefav}><FaRegHeart color={isfav ? "red" : "white"} /></button>
            </div>
            <div className="m-info">
                <h3>{props.movie.title}</h3>
                <p>{props.movie.release_date.split("-")[0]}</p>
                <p className="m-overview">{props.movie.overview}</p>
            </div>
        </div>      
    )
}