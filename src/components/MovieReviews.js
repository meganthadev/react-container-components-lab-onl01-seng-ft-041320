import React from 'react';

const Review = ({ byline, headline, summary_short }) => {
    return (
      <div className="review">
        <li>
          <h3>{headline}</h3>
          <h4>By: {byline}</h4>
          <p>{summary_short}</p>
        </li>
        
      
      )
 }
  


export default MovieReviews;