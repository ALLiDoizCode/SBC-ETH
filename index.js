var keythereum = require("keythereum");
const EthereumTx = require('ethereumjs-tx')

function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

function newAddress() {
    var dk = keythereum.create();
    var readableAddress = keythereum.privateKeyToAddress(dk.privateKey);
    return {
        "public":readableAddress,
        "private":dk.privateKey.toString('hex')
    }
}

function importAddress(private) {
    var readableAddress = keythereum.privateKeyToAddress(private);
    return {
        "public":readableAddress,
        "private":private
    }
}

function toWei(value) {
    return (value * 1000000000000000000).toString()
}

function fromWei(value) {
    return (value / 1000000000000000000).toString()
}

function payment(privateKey,gasPrice,gasLimit,to,value,nonce) {
    const privateKeyBuffer = Buffer.from(privateKey, 'hex')
    const wei = toWei(value)
    const txParams = {
        nonce: "0x"+decimalToHex(nonce),
        gasPrice: "0x"+decimalToHex(gasPrice), 
        gasLimit: "0x"+decimalToHex(gasLimit),
        to: to, 
        value: "0x"+decimalToHex(wei),
      }
      
      const tx = new EthereumTx(txParams)
      tx.sign(privateKeyBuffer)
      const serializedTx = tx.serialize()
      console.log('---Serialized TX----')
      console.log(tx.serialize().toString('hex'))
      console.log('--------------------')
      return serializedTx
}

//var account = newAddress()
//console.log(account)
/*payment(account.private,"1000","1000",account.public,1,"15")*/

var ConvertBase = function (num) {
    return {
        from : function (baseFrom) {
            return {
                to : function (baseTo) {
                    return parseInt(num, baseFrom).toString(baseTo);
                }
            };
        }
    };
};


ConvertBase.hex2dec = function (num) {
    return ConvertBase(num).from(16).to(10);
};

let result = ConvertBase.hex2dec("0x15ff4ac530946050249d"); // '11111000'
var eth = fromWei(result)
console.log(eth)

var wei = toWei(eth)

console.log(decimalToHex(wei))

let result2 = ConvertBase.hex2dec("0x"+decimalToHex(wei)); // '11111000'
var eth2 = fromWei(result2)
console.log(eth2)