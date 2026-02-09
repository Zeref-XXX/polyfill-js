//after activity trigger after delay inactivity 

function debounce(func, delay) {

    let timeI;
    return function (...args) {
        clearTimeout(timeI)
        timeI = setTimeout(() => {
            func(...args);
        }, delay)
    }
}