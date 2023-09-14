/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({ selectedActors, remaining, totalCost }) => {
    console.log(selectedActors)

    return (
        <div>
            <h2>Total Actor: {selectedActors.length}</h2>
            <h3>Remaining:{remaining}</h3>
            <h3>TotalCost:{totalCost}</h3>
            {
                selectedActors.map(actor => (
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;