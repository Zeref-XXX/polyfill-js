
function th(fn, delay) {
    let lastExecutedTime = 0;

    return function (...args) {
        const now = Date.now()

        if (now - lastExecutedTime >= delay) {
            fn(...args)
            lastExecutedTime = now
        }
    }
}

const thrott= th(() => {
    console.log("throttle")
}, 5000)

setInterval(()=>{
thrott()
},1)