let arr = [10,45,23,45,90,12];
let larg = -Infinity;
let Slarg = -Infinity;
let x;
for(let i = 0; i< arr.length; i++){
    Cnum = arr[i];
   if(Cnum>larg){
    Slarg = larg;
    larg = Cnum;
   }  
   else if (Cnum > Slarg && Cnum != larg){
    Slarg = Cnum;
   }
}
console.log(Slarg)
console.log(larg)