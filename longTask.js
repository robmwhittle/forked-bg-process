const longTask = async (limit) => {
    let sum = 0;
    for (let i = 0; i < limit; i += 1) {
        console.log(i);
        sum += i;
    }
    return sum;
};
module.exports = longTask;