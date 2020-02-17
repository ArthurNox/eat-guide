import React, { useEffect, useState } from 'react';
import './home.css';

import api from '../../services/Api';
import List from '../../components/List';
import logo from '../../assets/logo.svg';


// import { Container } from './styles';

export default function Home() {
  const [asdasd, setLocations] = useState([])

  // useEffect(() => {
  //   async function loadLocations() {
  //     const res = await api.get('/locations')
  
  //     setLocations(res.data)
  //   }
  
  //   loadLocations()
    
  // }, [])

  const locations = [
    {
      "name": "Silva Lanches",
      "menuItens": [
        {
          "name": "Xis Bacon",
          "description": "Pão, alface, tomate, carne, bacon, milho, ervilha, maionese, catchup, mostarda",
          "price": 20.5
        },
        {
          "name": "Xis Veg",
          "description": "Pão, alface, tomate, bife de grão-de-bico, milho, ervilha, maionese, catchup, mostarda",
          "price": 22.5
        },
        {
          "name": "Bauru Picanha",
          "description": "Pão, alface, tomate, picanha, maionese",
          "price": 25
        }
      ]
    },
    {
      "name": "Z Café",
      "menuItens": [
        {
          "name": "Café Expresso",
          "description": "50ml do mais puro café moído e passado na hora",
          "price": 5.5
        },
        {
          "name": "Café Ristretto",
          "description": "30ml do melhor café aliadodos principais óleos essenciais",
          "price": 7.5
        },
        {
          "name": "Café Mochaccino",
          "description": "70ml do melhor café expresso junto ao delicioso leite vaporizado e o melhor chocolate suiço",
          "price": 10.5
        }
      ]
    },
    {
      "name": "Canal Café - PUCRS",
      "menuItens": [
        {
          "name": "Café Expresso",
          "description": "50ml do puro café moído e passado na hora",
          "price": 6.5
        },
        {
          "name": "Suco Natural",
          "description": "500ml de suco de frutas da estação",
          "price": 12.5
        }
      ]
    },
    {
      "name": "Palatu's - PUCRS",
      "menuItens": [
        {
          "name": "Buffet com grelhados",
          "description": "30 variedades de saladas, pratos quentes e churrasco",
          "price": 27.5
        },
        {
          "name": "Suco Natural",
          "description": "500ml de suco de frutas da estação",
          "price": 4.5
        },
        {
          "name": "Refrigerante Lata",
          "description": "Pepsi, guaraná, sprite ou sukita",
          "price": 4.5
        }
      ]
    }
  ]
 


  return (
    <div className="home-content">
      <img src={logo} alt="Logo" />
      <List locations={locations}/>
    </div>

  );
}
