function add (numbers) {
    if (!numbers) return 0;

    sum = numbers.split(',').reduce((a,b)=>parseInt(a)+parseInt(b),0)
    return sum;
}

module.exports = add;