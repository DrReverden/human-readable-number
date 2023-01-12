module.exports = function toReadable (number) {
  const digit = number;
    const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifthteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let splitNumber = [];
    while(number) {
        splitNumber.push(number % 10);
        number = Math.floor(number / 10);
    }
    splitNumber = splitNumber.reverse();

    switch(digit) {
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen'
    }
    if (splitNumber.length < 2) {
        return units[splitNumber[0] - 1]
    } else if (digit > 16 && digit < 20) {
        return units[splitNumber.pop() - 1] + 'teen';
    } else if (splitNumber.length < 3 && splitNumber[splitNumber.length - 1] === 0) {
        return dozens[splitNumber[0] - 1];
    } else if (splitNumber.length < 3) {
        return dozens[splitNumber[0] - 2], units[splitNumber[1] - 1];
    } else if (splitNumber.length < 4) {
        if (splitNumber[1] === 1) {
            return `${units[splitNumber[0] - 1]} hungred ${tens[splitNumber[2]]}`;
         } else if (splitNumber[splitNumber.length - 1] === 0) {
            splitNumber.pop()
            return `${units[splitNumber[0] - 1]} hungred ${dozens[splitNumber[1] - 1]}`
        } else {
            return `${units[splitNumber[0] - 1]} hungred ${dozens[splitNumber[1] - 1]} ${units[splitNumber[2] - 1]}`
        }
    }
}
