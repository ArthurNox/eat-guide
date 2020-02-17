import React from 'react';

import Card from '../Card';
import './list.css'


function List (props){
  const { locations } = props;
  
    return (
    <>
      <article className="list-content">
      <h1>Lugares</h1>
      <p>{locations.length} Lugares cadastrados</p>
          {locations.map(location => (
            <Card key={location.name}  location={location}/>
          ) 
        )}
      </article>
    </>
      );
}

export default List