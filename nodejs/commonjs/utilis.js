//-----ways of exporting modules in csjs----
//Single Function Export
//Object export
//Named function export
//using export shorthand

// //Single Function Export
// const firstName="Alice";
// //Expose this file
// const greet=(name)=>{
//     return 'Hello '+name;
// }
// module.exports=greet;


// // Object export
// module.exports={
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     }
// }

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
// module.exports={
//     mySubtract:sub,
//     myAdd:add,
// }
// // or
// module.exports={
//     sub,
//     add,
// }

//Named function export
// module.exports.sayHi=(name)=>{
//     return "Hi "+name;
// }
// module.exports.sayBye=function(name){
//     return "Byyyyyyye";
// }

//using export shorthand
exports.sayHi=(name)=>{
    return "Hi "+name;
}
exports.sayBye=function(name){
    return "Byyyyyyye";
}