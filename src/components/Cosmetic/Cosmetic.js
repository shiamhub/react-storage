import React from 'react';
import { addToDb, removeDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic
    const addCard = (i) => {
        // console.log(i);
        addToDb(id)
    }

    const remove = (id) => {
        console.log(id);
        removeDb(id);
    }

    return (
        <div className='pro'>
            <h2>Bay this name: {name}</h2>
            <p>prise : {price}</p>
            <button onClick={() => addCard(id)}>Add to card</button>
            <button onClick={() => remove(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;