import React from 'react';

import Card from '../Card';


function List (props){
  const { locations } = props;
  
    return (
    <>
      <div className="list-content"></div>
      <div className="list-title">Lugares</div>
      <p>{locations.length} Lugares cadastrados</p>
        <ul>
          {locations.map(location => (
            <Card key={location.name}  location={location}/>
          ) 
        )}</ul>
    </>
      );
}

export default List