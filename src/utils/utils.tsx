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

export function getFileExtension(str: string): string | null {
    const re = /(?:\.([^.]+))?$/;
    let res = re.exec(str);
    return res ? res[1] : null;
}
