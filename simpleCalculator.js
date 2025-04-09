function add (numbers) {
    if (!numbers) return 0;
    const negativeNumbers = numbers.split(',').filter(num => parseInt(num) < 0);
    if (negativeNumbers.length > 0) {
        throw new Error('Negative numbers are not allowed ' + negativeNumbers.join(','));
    }
    sum = numbers.split(',').reduce((a,b)=> parseInt(a)+parseInt(b),0)
    return sum;
}

module.exports = add;