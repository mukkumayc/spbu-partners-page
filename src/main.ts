function calculateSumOf2Numbers(a: number, b: number) {
    return a + b;
}

// return the current time in the format HH:MM:SS
function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}