'use strict';

import checkIP from './ip.js';
import checkMAC from './mac.js';
import checkVISA from './visa.js';

const checker = {
    rules: {
        visa: checkVISA,
        ip: checkIP,
        mac: checkMAC
    },
    validate( str, type ) {
        return checker.rules[type](str);
    }
}

export default checker;