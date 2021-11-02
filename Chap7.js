const musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");

musketeers.forEach(musketeer => {
    console.log(musketeer);
});

musketeers.pop("D'Artagnan");

for (const musketeer of musketeers) {
    console.log(musketeer);
}

const values = [3, 11, 7, 2, 9, 10];
values.sort((a, b) => b - a);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

for (let i = 0; i < values.length; i++) {
    console.log(values[i - (values.length - 1)]);
}