import React from 'react';
// import { BackButton } from '../../components/BackButton/styles';

// import { Container } from './styles';

export default function Detail(props) {
  
  // const { location } = props;
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
  const mock = mocks.menuItens;
  console.log('MOCKS', mock)

  return (
    <div className="detail">
      <h2>Share Eat</h2>
      <div className="detail-content">
        <h1>{mocks.name}</h1>
        {mock.map(un => (
            <h3>{un.name}</h3>
            

          ))}
      </div>

    </div>
  );
}
