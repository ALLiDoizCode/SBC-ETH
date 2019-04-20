/*
var newWallet = newAddress()
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
<a href="https://www.secureblockchains.com/"><img src="https://github.com/SecureBlockChains/Assets/blob/master/Anchor.png" title="Boid" alt="Boid"></a>

<p align="center">
    <a href="https://t.me/Boidcom_official">
        <img src="https://img.shields.io/discord/431917998102675485.svg" alt="Telegram">
    </a>
    <a href="LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="MIT License">
    </a>
    <a href="https://twitter.com/boidcom">
        <img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social&style=plastic" alt="Twitter">
    </a>
</p>


# Boid CLI

> A linux command line interface for Boid 

### Examples

> Address Creation

```shell
var newWallet = newAddress()
var oldWallet = importAddress("80135c38779b3f124bf21ccc7ad94d07d60cbc3f81e9f1e129cad24033194730")
```

> Balance

```shell
balance("0x92db85f920928429c3e519c3868329fe1fabeffc",function (json) {
    console.log(json)
    let ETHBalance = helper.fromWei(json.result)
    console.log(ETHBalance)
})
```

> Payments

```shell
var tx = payment("80135c38779b3f124bf21ccc7ad94d07d60cbc3f81e9f1e129cad24033194730", "21", "10000000000", "0x92db85f920928429c3e519c3868329fe1fabeffc",1, "1")
```
