let a={
    x:10,
    y:30
}
let a1={
    x:10,
    y:30
}

// if(a.x===a1.x && a.y===a1.y){
//     console.log('ture');
// }
// else{
//     console.log('false')
// }
console.log(JSON.stringify(a)===JSON.stringify(a1))