'use strict';

const checkIP = ip => /^((1\d\d|[1-9]\d|2[0-4]\d|25[0-5]|\d)\.){3}(1\d\d|[1-9]\d|2[0-4]\d|25[0-5]|\d)$/.test(ip);

export default checkIP;