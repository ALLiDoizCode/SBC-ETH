const client = require("./Helpers/Client");
const helper = require("./Helpers/Helper");
const keythereum = require("keythereum");
const EthereumTx = require('ethereumjs-tx');

var exports = module.exports = {};

exports.newAddress = function() {
    var dk = keythereum.create();
    var readableAddress = keythereum.privateKeyToAddress(dk.privateKey);
    return {
        "public": readableAddress,
        "private": dk.privateKey.toString('hex')
    }
}

exports.importAddress = function(private) {
    var readableAddress = keythereum.privateKeyToAddress(private);
    return {
        "public": readableAddress,
        "private": private
    }
}

exports.payment = function(privateKey, gasPrice, gasLimit, to, value, nonce) {
    const privateKeyBuffer = Buffer.from(privateKey, 'hex')
    const wei = helper.toWei(value)
    const txParams = {
        nonce: "0x" + helper.decimalToHex(nonce),
        gasPrice: "0x" + helper.decimalToHex(gasPrice),
        gasLimit: "0x" + helper.decimalToHex(gasLimit),
        to: to,
        value: "0x" + helper.decimalToHex(wei),
    }

    const tx = new EthereumTx(txParams)
    tx.sign(privateKeyBuffer)
    const serializedTx = tx.serialize()
    return serializedTx.toString('hex')
}

exports.submit = function(tx) {
    client.send(function (json) {
        console.log(json)
    }, client.router.submit, tx)
}

exports.balance = function(address,callback) {
    client.send(callback,client.router.balance, address)
}

exports.transactionCount = function(address,callback) {
    client.send(callback,client.router.transactionCount, address)
}

exports.transaction = function(hash,callback) {
    client.send(callback,client.router.transaction, hash)
}

exports.currentBlock = function(callback) {
    client.send(callback,client.router.currentBlock, "")
}

exports.history = function(address,start,end,callback) {
    client.send(callback,client.router.history, address+"/"+start+"/"+end)
}

/*var newWallet = newAddress()
var oldWallet = importAddress("80135c38779b3f124bf21ccc7ad94d07d60cbc3f81e9f1e129cad24033194730")
var tx = payment("80135c38779b3f124bf21ccc7ad94d07d60cbc3f81e9f1e129cad24033194730", "21", "10000000000", "0x92db85f920928429c3e519c3868329fe1fabeffc",1, "1")
var result = helper.hex2dec("0x38d7ea4c68000")
var ETH = helper.fromWei(1000000000000000000)
var wei = helper.toWei(1)

console.log(newWallet)
console.log(oldWallet)
console.log(tx)
console.log(result)
console.log(ETH)
console.log(wei)*/

/*balance("0x92db85f920928429c3e519c3868329fe1fabeffc",function (json) {
    console.log(json)
    let ETHBalance = helper.fromWei(json.result)
    console.log(ETHBalance)
})*/
