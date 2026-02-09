// if triggered before delay do nothing else executte action
function th(fn, delay) {
    let lastExecutedTime = 0;

    return function (...args) {
        const now = Date.now()

        if (now - lastExecutedTime >= delay) {
            lastExecutedTime = now
            return fn(...args)
        }
    }
}

const thrott= th(() => {
    console.log("throttle")
}, 5000)

setInterval(()=>{
thrott()
},1)