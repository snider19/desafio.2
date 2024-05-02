function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

const n = 20;
const approxVal = stirlingApproximation(n);
const trueVal = factorial(n);
const error = (trueVal - approxVal) / trueVal;

const resultsDiv = document.getElementById('results');
resultsDiv.innerHTML = `
    <p>Approximate value: ${approxVal}</p>
    <p>True value: ${trueVal}</p>
    <p>Error: ${error}</p>
`;