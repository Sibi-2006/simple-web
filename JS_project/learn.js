/*
let dollar=[56,34,76,98,90,23,45];
//let INR = dollar.map(x => x*80);
//console.log(INR);
let INR = dollar.map(toINR);
function toINR(x){
    return x*80;
}
console.log(INR);

let arr =[23,43,67,100,304,508,23,80,23,4456,23,546,7675,12,355];
*/

//let arr2=arr.filter(x => x<100);
//console.log(arr2);
/*
let arr2 = arr.filter(less100);
function less100(x){
    return x<100;
}
console.log(arr2);

let ABC=[["a","b","c"],
         ["c","b","d"],
         ["a","e","c"] ];
let count=ABC.flat().reduce(
    (val,currentval)=>{
        if(val[currentval]){
            val[currentval]++;
        }
        else{
            val[currentval]=1;
        }
        return val;
    }
    
    ,{});
console.log(count)
let nums = [12, 7, 5, 20, 11, 6, 3];

let sum = nums.reduce((acc, curr) => {
    if(curr%2!==0){
        return acc+curr;
    }
    else
        return acc;
}, 0);

console.log(sum);

let sentence = "bro you are the bro who always says bro because bro is your vibe";

let wordCount = sentence.split(" ").reduce((acc, word) => {
   if(acc[word]){
        acc[word]++
   }
   else{
        acc[word]=1;
   }
   return acc
}, {});

console.log(wordCount);

let str = "brother";

let reversed = str.split("").reduce((acc, char) => {
    return char+acc;
}, "");

console.log(reversed);
*/

//stack storage and heap storage

/*
let a=10;
let b=a;
console.log(a);
console.log(b);
a=20;
b=70;
console.log(a);
console.log(b);

let ob1={name:'sibi',age:12};
console.log(ob1);
let ob2=ob1;
console.log(ob2);
ob1.name='samantha'

console.log(ob2);
console.log(ob1);

ob2.age=35;

console.log(ob2);
console.log(ob1);

let arr1=[12,34,45]
let arr2=arr1;

console.log(arr1,arr2);
arr1[0]=90;
console.log(arr1,arr2);
*/

let arr=[3,4,5,6,5],t=11;
let val =function(arr,t){
    let res=[],count=0;
    for(let i=0;i<arr.length;i++){
         for(let j=0;j<arr.length;j++){
            if(arr[i]+arr[j]===t){
                res[count]=i;
                count++;
                res[count]=j;
                return res;
            }
        }
    }
    
}
console.log(val(arr,t))