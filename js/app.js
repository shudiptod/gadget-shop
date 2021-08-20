//apply promo code function 

function applyPromoCode() {

    const typedCode = document.getElementById('promo-input');

    // check if promo code is correct (stevekaku)
    if (typedCode.value == 'stevekaku') {

        const total = document.getElementById('total-price');

        const totalPrice = parseInt(total.innerText);

        // updating final price 
        const promoCodePrice = document.getElementById('final-price');

        promoCodePrice.innerText = totalPrice - totalPrice * .2;


    }

    // clear promo code input 
    typedCode.value = "";

}


// update extra item prices 

function setExtraPrice(partsId, amount) {

    const extraMemoryText = document.getElementById(partsId + '-price');
    let extraMemoryPrice = parseInt(extraMemoryText.innerText);

    extraMemoryPrice = amount;
    extraMemoryText.innerText = amount;

    setTotalPrice();

}

// get any  current item price

function getPrice(itemId) {
    const currentItem = document.getElementById(itemId + '-price');
    const currentItemPrice = parseInt(currentItem.innerText);
    return currentItemPrice;
};


// update total price 

function setTotalPrice() {
    const total = document.getElementById('total-price');
    let totalPrice = parseInt(total.innerText);

    const currentMemoryPrice = getPrice('memory');
    const currentStoragePrice = getPrice('storage');
    const currentDeliveryPrice = getPrice('delivery');

    // updating total price 
    totalPrice = 1299 + currentDeliveryPrice + currentMemoryPrice + currentStoragePrice;

    total.innerText = totalPrice;

    // updating final price 
    const promoCodePrice = document.getElementById('final-price');

    promoCodePrice.innerText = totalPrice;

};



/*==================
all event listeners
====================*/

// memory price update 
document.getElementById('8gb-memory').addEventListener(
    'click', function () {
        setExtraPrice('memory', 0);
    }
);
document.getElementById('16gb-memory').addEventListener(
    'click', function () {
        setExtraPrice('memory', 180);
    }
);


// storage price update 
document.getElementById('256gb-storage').addEventListener(
    'click', function () {
        setExtraPrice('storage', 0);
    }
);

document.getElementById('512gb-storage').addEventListener(
    'click', function () {
        setExtraPrice('storage', 100);
    }
);
document.getElementById('1tb-storage').addEventListener(
    'click', function () {
        setExtraPrice('storage', 180);
    }
);

// delivery charge update 
document.getElementById('default-delivery').addEventListener(
    'click', function () {
        setExtraPrice('delivery', 0);
    }
);

document.getElementById('early-delivery').addEventListener(
    'click', function () {
        setExtraPrice('delivery', 20);
    }
);