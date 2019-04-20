var exports = module.exports = {};

exports.decimalToHex = function(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

var ConvertBase = function (num) {
    return {
        from: function (baseFrom) {
            return {
                to: function (baseTo) {
                    return parseInt(num, baseFrom).toString(baseTo);
                }
            };
        }
    };
};


exports.hex2dec = function (num) {
    return ConvertBase(num).from(16).to(10);
};

exports.toWei = function(value) {
    return (value * 1000000000000000000).toString()
}

exports.fromWei = function(value) {
    return (value / 1000000000000000000).toString()
}