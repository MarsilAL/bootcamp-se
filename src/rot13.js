
function rot13_encode(str) {
    var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789 ';
    var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm123456789 ';
    var index     = x => input.indexOf(x);
    var translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
}


function rot13_decode(str) {
    var output     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789 ';
    var  input   = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm123456789 ';
    var index     = x => input.indexOf(x);
    var translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
}




export {rot13_encode, rot13_decode};