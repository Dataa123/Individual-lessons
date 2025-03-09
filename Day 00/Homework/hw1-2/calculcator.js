function calc(num1, num2, op){
    return eval(`${num1}${op}${num2}`);
}

function filter(arr, func){
    const res = [];
    for(let i of arr){
        if(func(i)){
            res.push(i);
        }
    }
    return res;
}

module.exports = { calc, filter };
// is used to take function outside of this file

