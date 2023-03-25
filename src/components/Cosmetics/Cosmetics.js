import React, { useEffect, useState } from 'react';
import { totalPrice } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add, mulitiply } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    // const a = 5;
    // const b = 24;
    // const total = add(a, b);
    // const mul = mulitiply(a, b);
    // const cosmetics = [
    //     {id: 1, name: 'alta', price: 10},
    //     {id: 2, name: 'blta', price: 20},
    //     {id: 3, name: 'clta', price: 30},
    //     {id: 4, name: 'dlta', price: 40}
    // ]
    const [cosmetics, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))

    }, [])
    const total = totalPrice(cosmetics);
    return (
        <div>
            <h1>Welcome to my Cosmetics</h1>
            <p>Total: {total}</p>
            {/* <p>total {total}</p>
            <p>re {mul}</p> */}
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;