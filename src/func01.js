const f1 = a => a * a;
const f2 = () =>{
    let sum = 0;
    for(let i=1; i<=10; i++) {
        sum += i;
    }
    return sum;
}

console.log(f1(6));
console.log(f2());