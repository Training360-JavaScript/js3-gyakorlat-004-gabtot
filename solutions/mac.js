'use strict';

const checkMac = address => /^([a-f0-9]{2}:){5}[a-f0-9]{2}$/i.test(address);

export default checkMac;