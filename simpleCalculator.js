function add (numbers) {
    if (!numbers) return 0;

    let delimiter = '';
    
    // Handle delimiter
    if (numbers.startsWith('//')) {
        numbers = numbers.substring(2);
        delimiter = '[\n;]'
    } else delimiter = '\n'

    numbers = numbers.replace(`/${delimiter}/g`, ',');

    // Handle empty strings and converts string to number
    numArray = numbers.split(',').map(n => parseInt(n, 10)||0);
    
    // handle negative numbers
    const negativeNumbers = numArray.filter(num => parseInt(num,10) < 0);
    if (negativeNumbers.length > 0) throw new Error('Negative numbers are not allowed ' + negativeNumbers.join(','));
    
    // Find sum of all numbers in a  array
    sum = numArray.reduce((a,b)=> b>1000? a : a + b,0)
    return sum;
}

module.exports = add;