import React from 'react'
// import StarRating from "./starRating"
const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg";

const  Movie = ({movie}) => {
  const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
   <></>
    // <div className="movie">
      
      
    // <div>
    //   <img
    //       width="200"
    //       alt={`The movie titled: ${movie.Title}`}
    //       src={poster}
    //     />
    //    </div> 
    //    {/* Movie card titles*/}
    //   <p>{movie.Title}</p>
    //   <p>{movie.Rating}</p>
    //   <p>{movie.Year}</p>
    //   <StarRating rating={5}/>
    // </div>
  )
}

export default Movie
