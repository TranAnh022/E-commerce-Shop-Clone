  // Selector
const getBasketTotal = (basket) => {
 const sum = basket.reduce((amount,item) => item.price+ amount,0)
    return sum;
}

export default getBasketTotal;