function min(A, B) {
    if (A >= B) {
        return B;
    } else if (A <= B) {
        return A;
    }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10