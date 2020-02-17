import React from 'react';
import { Link } from "react-router-dom"
import { IoIosAddCircleOutline } from "react-icons/io";
// import { Restaurant } from './styles'


import { ButtonPlus } from '../ButtonPlus/styles'
import "./card.css"
// import { Container } from './styles';

export default function Card(props) {
  const { location } = props;


  return (
    <Link to="/detail">
      <article className="card">
        <div className="card-content">
          <h3>{location.name}</h3>
          <p>Pratos {location.menuItens.length}</p>
        </div>
        <Link to="/form">
          <IoIosAddCircleOutline />
        </Link>
      </article>
      </Link>
  );
}


