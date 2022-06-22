var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    if (currentNumber >= '10') {
        currentNumber = 10;
        currentNumberWrapper.innerHTML = currentNumber;
    } else {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black';
    } else {
        currentNumberWrapper.style.color = 'red';
    }
}

function decrement() {
    if (currentNumber <= '-10') {
        currentNumber = -10;
        currentNumberWrapper.innerHTML = currentNumber;
    } else {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black';
    } else {
        currentNumberWrapper.style.color = 'red';
    }
}