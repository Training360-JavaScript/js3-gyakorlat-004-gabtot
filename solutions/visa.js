'use strict';

const checkVisa = cardNumber => /^4\d{15}$/.test(cardNumber);

export default checkVisa;