import React from 'react';
import Thumbnail from './Thumbnail';

const Results = ({ results }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div>
      {results.map((result) => {
        return <Thumbnail key={result.id} result={result} />;
      })}
    </div>
  );
};

export default Results;
