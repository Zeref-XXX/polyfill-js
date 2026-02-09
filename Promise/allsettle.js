Promise.mySettle = function (args) {
    let count = 0;
    return new Promise((resolve, reject) => {
        if (args.length == 0) resolve([])

        let arr = new Array(args.length)
        
        args.forEach((element, index) => {
            Promise.resolve(element).then(
                (gotResult) => {
                    let obj = {
                        status: "completed",
                        value: gotResult
                    }
                    arr[index] = obj
                    count++;
                    if (count == args.length) resolve(arr)
                }   
            ).catch(err => {
                let obj = {
                    status: "failed",
                    value: err
                }
                arr[index] = obj
                count++;
                if (count == args.length) resolve(arr)
            })
        })
    })
} 

const p1 = Promise.resolve(10);
const p2 = Promise.reject("error");
const p3 = new Promise(res => setTimeout(res, 1000));

// Promise.allSettled([p1, p2, p3])
//     .then(results => {
//         console.log(results);
//     });

Promise.mySettle([p1, p2, p3])
    .then(results => {
        console.log(results);
    });
