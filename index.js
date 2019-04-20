const client = require("./Helpers/Client")
const helper = require("./Helpers/Helper")

const keythereum = require("keythereum");
const EthereumTx = require('ethereumjs-tx')

function newAddress() {
    var dk = keythereum.create();
    var readableAddress = keythereum.privateKeyToAddress(dk.privateKey);
    return {
        "public": readableAddress,
        "private": dk.privateKey.toString('hex')
    }
}

function importAddress(private) {
    var readableAddress = keythereum.privateKeyToAddress(private);
    return {
        "public": readableAddress,
        "private": private
    }
}

function payment(privateKey, gasPrice, gasLimit, to, value, nonce) {
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

function submit(tx) {
    client.send(function (json) {
        console.log(json)
    }, client.router.submit, tx)
}

function balance(address,callback) {
    client.send(callback,client.router.balance, address)
}

function transactionCount(address) {
    client.send(function (json) {
        let count = helper.hex2dec(json.result)
        console.log(count)
    }, client.router.transactionCount, address)
}

function transaction(hash) {
    client.send(function (json) {
        console.log(json)
    }, client.router.transaction, hash)
}

function currentBlock() {
    client.send(function (json) {
        let block = helper.hex2dec(json.result)
        console.log(block)
    }, client.router.currentBlock, "")
}

function history(address,start,end) {
    client.send(function (json) {
        console.log(json)
    }, client.router.history, address+"/"+start+"/"+end)
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

balance("0x92db85f920928429c3e519c3868329fe1fabeffc",function (json) {
    console.log(json)
    let ETHBalance = helper.fromWei(json.result)
    console.log(ETHBalance)
})
