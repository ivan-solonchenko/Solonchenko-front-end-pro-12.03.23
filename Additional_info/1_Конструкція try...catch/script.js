function division (a, b) {
    if (b ===0) {
        throw new Error('Division by zero!')
    }
    return a / b;
}

try {
    const result = division(5, 0);
    console.log(result)
} catch (err) {
    console.log(err.message);
} finally {
    console.log('Частина коду, яка виконається у будь-якому випадку!')
}

