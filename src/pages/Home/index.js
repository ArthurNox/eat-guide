import React, { useEffect, useState } from 'react';
import './home.css';

import api from '../../services/Api';
import List from '../../components/List';
import logo from '../../assets/logo.svg';


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
    <div className="home-content">
      <img src={logo} alt="Logo" />
      <List locations={locations}/>
    </div>

  );
}
