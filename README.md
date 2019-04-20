<a href="https://www.secureblockchains.com/"><img src="https://github.com/SecureBlockChains/Assets/blob/master/Anchor.png" title="Boid" alt="Boid"></a>

# SBC-ETH

> A Node.js Library for ETH

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
