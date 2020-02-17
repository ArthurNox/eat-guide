import React from 'react';
import { BackButton } from '../../components/BackButton/styles';
import { Link } from "react-router-dom"
import CardDetail from '../../components/CardDetail'
import './detail.css'

// import { Container } from './styles';
import logo from '../../assets/logo.svg';

export default function Detail(props) {
  
  //  const { location } = props;
  const mocks = {
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
  } 

  return (
    <div className="detail">
      <div className="top-detail">
      <Link to="/home">
        <BackButton />
      </Link>
        <img src={logo} alt="Logo" />;
      </div>
      <div className="detail-content">
        <h1>{mocks.name}</h1>
        <CardDetail  location={mocks}/>
        
      </div>
    </div>
  );
}
