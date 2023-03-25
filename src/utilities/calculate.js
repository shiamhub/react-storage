const add = (first, second)  => {
    return first + second;
}

// export default add;

const mulitiply = (first, second) => {
    return first* second;
}

const totalPrice = pro => pro.reduce((p, c) => p + c.price, 0)

export { add, mulitiply, totalPrice };