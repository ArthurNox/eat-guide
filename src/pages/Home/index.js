import React, { useEffect, useState } from 'react';

import api from '../../services/Api';
import List from '../../components/List';
import './home.css';

// import { Container } from './styles';

export default function Home() {
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
      <h3>Share Eat</h3>
      <List locations={locations}/>
    </>
  );
}
