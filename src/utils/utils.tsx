export function constrain(value, min = 0, max = 100) {
    return Math.min(
        Math.max(
            value,
            min
        ),
        max
    );
}

export function numberFixed(num, total) {
    var result = (num * total / 100);
    return result;
}
