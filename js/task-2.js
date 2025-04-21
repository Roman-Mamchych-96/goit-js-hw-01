function getShippingMessage (country, price, deliveryFee ) {
    const newPrice = price + deliveryFee;
    const priceDeliver = `Shipping to ${country} will cost ${newPrice} credits`;

    console.log(priceDeliver);
    return
}

getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);