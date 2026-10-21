//Home.jsx
import Moviecard from "../components/Movie-card"
import { useState, useEffect } from "react"
import {useSearchParams} from "react-router-dom"
import {getpopularmovies,searchmovie} from "../services/api.js"
import "../css/Home.css"

export default function Home() {
    let [searchquery,setsearchquery] = useState("")
    let [movies,setmovies]=useState([])
    let [searchparams,setsearchparams]=useSearchParams()

    useEffect(()=>{
        async function loadmovies(){
            try {
                if(!searchparams.get("search")){
                    let loadedmovies=await getpopularmovies();
                    setmovies(loadedmovies.results) ;
                    // console.log(loadedmovies.results) ;
                    setsearchquery("");
                }else{
                    let searchres= await searchmovie(searchparams.get("search"));
                    // console.log(searchres.results)
                    setmovies(searchres.results);
                } 
            }
            catch(err){ console.log(err); }
        }
        loadmovies()
    },[searchparams.get("search")])

    
    // let moviedb=[
    //     {id:1,name:"Doomsday",rel_year:2026},
    //     {id:2,name:"Dune 3",rel_year:2026},
    //     {id:3,name:"Secret Wars",rel_year:2028},
    // ]

    function display_movies(){
        return (
            movies.map(movie=> (
                <Moviecard movie={movie} key={movie.id}/>
            ))
        )
    }
    async function handlesearch(e){
        e.preventDefault()
        if(!searchquery.trim()) return
        try{
            setsearchparams({search:searchquery})

            // let searchres= await searchmovie(searchquery);
            // // console.log(searchres.results)
            // setmovies(searchres.results);
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className="home">
            <div className="m-search">
                <form onSubmit={(e)=> handlesearch(e)}>
                    <input 
                    type="text" 
                    placeholder="Search for movies"
                    value={searchquery}
                    onChange={(e)=> setsearchquery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="m-grid">
                {display_movies()}
            </div>
        </div>
    )
}