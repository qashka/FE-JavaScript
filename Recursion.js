function isEven(N) {
    if (N % 2 == 0) {
        return true;
    } else if (N == 0) {
        return true;
    } else if (N == 1) {
        return false;
    } else if ((N - 2) % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??