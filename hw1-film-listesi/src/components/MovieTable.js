import React from 'react';
import MovieRow from './MovieRow.js'
import MovieCategoryRow from './MovieCategoryRow.js'

const MovieTable = ({ movies }) => {

    const getDescriptions = () => {
        const descriptions = [];
        movies.forEach((movie) => {
          if(movie.description.includes("|")){
                movie.description.split("|").forEach((x) => {
                    if (!descriptions.includes(x)) {
                        descriptions.push(x);
                      }
                });
          }
          else{
            if (!descriptions.includes(movie.description)) {
              descriptions.push(movie.description);
          }
        }
    });
        return descriptions;
      };

return(
    <div>
        <table>
            <thead>
                <tr>
                    <th>Movie Title</th>
                    <th>Movie Description</th>
                </tr>
            </thead>
            <tbody>
            { getDescriptions().map((description) => (
          <>
            <MovieCategoryRow description={description} />

            {movies
              .filter((movie) => movie.description.includes(description))
              .map((movie) => (
                <MovieRow movie={movie} />
              ))}
          </>
        ))}
            </tbody>
        </table>

    </div>
);
}

export default MovieTable;