import React from 'react';
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom"

import { BackButton } from '../../components/BackButton/styles';

export default function Form() {






  return (
    <div className="form">
      <header>
      <Link to="/detail">
        <BackButton />
      </Link>
        <img src={logo} alt="Logo" />
      </header>
      <section className="form-content">
        <p>Nomedo Prato</p>
        <input ></input>
        <p>Valor</p>
        <input ></input>
        <p>Descrição do Prato</p>
      </section>
    </div>
  );
}
