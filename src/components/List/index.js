import React, { useEffect, useState } from 'react';

import api from '../../services/Api';
import Card from '../Card';


function List (){

const [locations, setLocations] = useState([])

useEffect(() => {
  async function loadLocations() {
    const res = await api.get('/locations')

    setLocations(res.data)
  }

  loadLocations()
  
}, [])

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