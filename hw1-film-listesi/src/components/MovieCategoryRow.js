import React from 'react';

import './MovieCategoryRow.css';

function MovieCategoryRow({ description }) {
  return (
    <tr className="movie-category-row">
      <td colSpan={2}>{description}</td>
    </tr>
  );
}

export default MovieCategoryRow;