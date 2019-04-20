
<p align="center">
 <a href="https://www.secureblockchains.com/"><img src="https://github.com/SecureBlockChains/Assets/blob/master/Anchor.png" title="SBC" alt="SBC"></a>
</p>

# SBC-ETH

> A Node.js Library for ETH

### Install

```
Insure you have your SSH keys added to yout github account before installing
```

> npm install -S SecureBlockChains/SBC-ETH

### Examples

> Address Creation

```javascript
var newWallet = newAddress()
var oldWallet = importAddress("80135c38779b3f124bf21ccc7ad94d07d60cbc3f81e9f1e129cad24033194730")
```

> Balance

```javascript
balance("0x92db85f920928429c3e519c3868329fe1fabeffc",function (json) {
    console.log(json)
    let ETHBalance = ETH.util.fromWei(json.result)
    console.log(ETHBalance)
})
```

> Payments

```javascript
var tx = payment("80135c38779b3f124bf21ccc7ad94d07d60cbc3f81e9f1e129cad24033194730", "21", "10000000000", "0x92db85f920928429c3e519c3868329fe1fabeffc",1, "1")
```

> utility

```javascript
var ethAmount = ETH.util.fromWei(1000000000000000000)
var wei = ETH.util.toWei(1)
var number = ETH.util.hex2dec(0x531587)
var hex = ETH.util.decimalToHex(1000000000000000000)
```

### Methods

```javascript
newAddress()
importAddress(private)
payment(privateKey, gasPrice, gasLimit, to, value, nonce)
submit(tx)
balance(address,callback)
transactionCount(address,callback)
transaction(hash,callback)
currentBlock(callback)
history(address,start,end,callback)
```
