//1.Default Export
//2.Name Export
//3.Mixed Export(Default + Named)
//4.Export everything

// //1.Default Export
// export default function(name){
//     return 'Hello '+name;
// }

// //2.Name Export
// export function add(a,b){
//     return a+b;
// }
// export function sub(a,b){
//     return a-b;
// }

// //3.Mixed Export(Default + Named)
//     export default function(name){
//         return 'Hello '+name;
//     }
//     export function add(a,b){
//         return a+b;
//     }
//     export function sub(a,b){
//         return a-b;
//     }

//4.Export everything
export function add(a,b){
    return a+b;
}
export function sub(a,b){
    return a-b;
}