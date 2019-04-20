const client = require("./Helpers/Client");
const helper = require("./Helpers/Helper");
const keythereum = require("keythereum");
const EthereumTx = require('ethereumjs-tx');

var exports = module.exports = {};
exports.util = helper
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

