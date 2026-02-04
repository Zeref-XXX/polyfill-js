//map Array.map((callback) => { })
// Array.prototype.myMap = function (cb) {
//     let temp = []
//     console.log(this)
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this))
//     }
//     return temp;
// }
// let arr = [1, 2, 3, 4, 5, 6]
// let a = arr.myMap((value, index, arr) => {
//     return value * index
// })
// console.log(a)

//filter arr.filter   -------------------------------------
// Array.prototype.myFilter=function(cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i],i,this)) temp.push(this[i]);
//     }
//     return temp;
// }
// const nums=[3,4,5,6,7,8,1,2]
// const check=nums.myFilter((num)=>num>3)
// console.log(check)

//reduce--- arr.reduce((acc,curr)=> {} ,init);

// Array.prototype.myReduce = function (cb, initial = this[0]) {
//     let ans = initial;
//     for (let i = 0; i < this.length; i++) {
//         ans = cb(ans, this[i])
//     }
//     return ans;
// }
// let n = [1, 2, 3,4]
// const a = n.myReduce((acc, cur,index,arr) => acc + cur, 0)
// console.log(a)

