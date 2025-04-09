function add (numbers) {
    if (!numbers) return 0;

    //checl next line and replace with comma
    const numbersStr = numbers.replace(/\n/g, ',');
  
    const negativeNumbers = numbersStr.split(',').filter(num => parseInt(num,10) < 0);
    if (negativeNumbers.length > 0) throw new Error('Negative numbers are not allowed ' + negativeNumbers.join(','));
    
    // Split by comma and convert to numbers
    const allNumbers = numbersStr.split(',').map(num => parseInt(num, 10));
    sum = allNumbers.reduce((a,b)=> a + b,0)
    return sum;
}

module.exports = add;