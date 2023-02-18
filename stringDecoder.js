const decoder = (code) => {
    const codeArr = code.split("");
    let decoded = '';
    for (let i = 0; i < codeArr.length; i++) {
    if (!isNaN(+codeArr[i])) {
        i += +codeArr[i];
    } else {
        decoded += codeArr[i];
    }
    }
    return decoded;
}
let code = '7jKoirwtR2Rua1dv3inte1nn2wrs';
console.log(decoder(code));