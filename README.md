# node-crypt-helper [![Build](https://github.com/libkhadir/node-crypt-helper/actions/workflows/node.js.yml/badge.svg)](https://github.com/libkhadir/node-crypt-helper/actions/workflows/node.js.yml)

## how to use this tool ?

```
npm run start encryt myfile mypassword
npm run start decrypt myfile mypassword
```


## for encrypt/decrypt simple text 

```
var crypto = require('crypto');

var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('abc', 'utf8', 'hex')
mystr += mykey.final('hex');
console.log(mystr); //34feb914c099df25794bf9ccb85bea72
```

```
var crypto = require('crypto');

var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('34feb914c099df25794bf9ccb85bea72', 'hex', 'utf8')
mystr += mykey.final('utf8');
console.log(mystr); //abc
```
