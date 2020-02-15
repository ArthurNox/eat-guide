import React from 'react';
import { Restaurant } from './styles'
import { ButtonPlus } from '../ButtonPlus/styles'
// import { Container } from './styles';

export default function Card(props) {
  const { location } = props;


  return (
    <>
      <Restaurant>
        <h3>{location.name}</h3>
        <p>Pratos {location.menuItens.length}</p>
      </Restaurant>
      <ButtonPlus />
    </>
  );
}


