import React from 'react';
import logo from '../../assets/logo.svg';
import './form.css'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Form() {

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
    <div className="form">
      <header>
      <Link to="/detail">
        <MdKeyboardArrowLeft />
      </Link>
        <img src={logo} alt="Logo" />
      </header>
      <h1>{mocks.name}</h1>
      <section className="form-content">
        <p>Nomedo Prato</p>
        <input className="food-name"></input>
        <p>Valor</p>
        <input ></input>
        <p>Descrição do Prato</p>
        <textarea></textarea>
        <p>*A descrição deve conter até 200 caracteres.</p>
      </section>
    </div>
  );
}
