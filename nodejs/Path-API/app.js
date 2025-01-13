const path=require("path");

//path.basename()
// const filename=path.basename("/user/test/file.txt");//shows the last path
// console.log(filename);
//output:file.txt

//path.dirname()
// const filename=path.dirname("/user/test/file.txt");
// console.log(filename);
//output: /user/test

//path.extname()
// const filename=path.extname("/user/test/file.txt");
// console.log(filename);
//output: .txt 

//path.join()
// const joinedPath=path.join("/user","test","file.txt");
// console.log(joinedPath);
//output:  /user/test/file.txt

//path.resolve()
// const absolutePath=path.resolve("text","file.txt");
// console.log(absolutePath);
//output:  gives whole path

//path.isAbsolute()
// const isAbs=path.isAbsolute("user/test");
// console.log(isAbs);
//output:  false

//path.parse()
const parsedPath=path.parse("/user/test/file.txt");
console.log(parsedPath.dir);
console.log(parsedPath.name);
console.log(parsedPath.ext);
//output:  /user/test,file.txt,.txt
