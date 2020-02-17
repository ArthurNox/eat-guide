import React from 'react';
import { Link } from "react-router-dom"
// import { Restaurant } from './styles'


import { ButtonPlus } from '../ButtonPlus/styles'
import "./card.css"
// import { Container } from './styles';

export default function Card(props) {
  const { location } = props;


  return (
    <Link to="/detail">
      <article className="card" onClick={e => console.log("Clicked")}>
        <div className="card-content">
          <h3>{location.name}</h3>
          <p>Pratos {location.menuItens.length}</p>
        </div>
        <ButtonPlus />
      </article>
      </Link>
  );
}


