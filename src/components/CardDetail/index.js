import React from 'react';
import "./cardDetail.css"

export default function CardDetail(props) {
  const { location } = props;

  const food = location.menuItens;

  return (
    <div className="cardDetail">
        {food.map(unity => (
          <article className="cardDetail-content">
            <section className="name-price">
              <h3>{unity.name}</h3> 
              <h3>R${unity.price}</h3>
            </section>
            <section className="foodDescription">
            <p>{unity.description}</p>
            </section>
          </article>
          ))}
    </div>
  );
}