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
    <div classname="home-content">
      <h2>Share Eat</h2>
      <List locations={locations}/>
    </div>

  );
}
