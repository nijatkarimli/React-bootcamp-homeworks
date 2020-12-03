import React from 'react';

const MovieRow = ({movie}) => {

return(
      
        <tr>
            <td>{movie.title}</td>
            <td>{movie.description}</td>
        </tr>
     
);
}

export default MovieRow;