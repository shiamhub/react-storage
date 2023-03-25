const addToDb = id => {
    let shoppingCart;
    
    const StoredCard = localStorage.getItem('shopping-cart');
    if(StoredCard) {
        shoppingCart = JSON.parse(StoredCard);
    }
    else {
        shoppingCart = {};
    }
    
    const quantity = shoppingCart[id];
    console.log(quantity);
    // const quantity = localStorage.getItem(id)
    if(quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else {
        shoppingCart[id] = 1
        // localStorage.setItem(id, 1)
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    // localStorage.setItem(id, 1);
};

const removeDb = id => {
    const StoredCard = localStorage.getItem('shopping-cart')
    if(StoredCard) {
        const shoppingCart = JSON.parse(StoredCard);

        if(id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }

};

export {addToDb, removeDb};