const mixArray = [true, 'hello', 5, 12, -200, false, 'word', 'cat', 'cookie']

const typesCount = {}


for (const item of mixArray) {
    const type = typeof item;

    if (typesCount[type]) {
        typesCount[type] += 1;
    } else {
        typesCount[type] = 1;
    }
}

console.log(typesCount);    