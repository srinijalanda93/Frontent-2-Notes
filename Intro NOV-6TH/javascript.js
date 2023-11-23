// DataType-read the documents
//loops
/* using loops- do the summation of frist 20 even numbers*/
//2,4,6,8,10...40 ->first 20 even numbers
/** 
let i=2,n=20,sum=0;
for(;i<=n*2;i+=2){
    sum+=i;
}
console.log(`THE sum of frist ${n} even number are = ${sum}`); //template literals

*/

//using while loop
let m=2,l=20,add=0;
while(m<=l*2){
    add+=m;
   m=+2; //updation
}
console.log("using while loop")
console.log(`THE sum of frist ${l} even number are = ${add}`); //template literals

//Array Concept
var arr2=['srinija',50,25,true,"single",'sfc',5.3]; //hetergenous
let arr=[23,4,5,6,78];
var length=arr.length; //return the length of the array
let arr1=[1,2,3,4, ,5];
var length=arr1.length; //6
console.log(arr1[4]); //undefined

var arr3=[23,4,"srinija"]; //length:3
//trying to access the arr3[3];
//3.for OUTOFBOUND always if we are trying to get the value it return -UNDEFINED.
console.log(arr3[3]) //undefined.
console.log(arr3[-3]) //undefined.

// JS ARRAY ARE "DYNAMIC"-add and remove

var arr4=[1,2,3,44,67];
console.log(arr4)
arr4[1]=45;
console.log(arr4)
