alert("hi");

//for each ,filter,map,indexof
var arr=[1,2,3,4];
arr.forEach(function(val){
   
});
var newarr=arr.map(function (val){
    return 12;
})
//map function ek array return krta hai jismein saare elements voh honge jaisa hum chahenge

//arr mei koi bhi change filter kuch change nhi krta
var ans=arr.filter(function(val){
    if(val>3){return true;}
    else{return false;}
})
console.log(ans);

//find simply finds if the val is present or not