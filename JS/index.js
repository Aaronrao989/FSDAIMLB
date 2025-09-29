// console.log("hello world");
// var a=20;
// console.log("a="=a);
// var a=30;
// if(a>20){
//     var a=50;
//     console.log("a inside value="+a);
// }else{
//     console.log("inside else statement");
// }
// console.log("a outside value="+a);

// function greetings(){
//     console.log("hello world"+msg);
// }
// greetings();
// const msg1=greetings();
// console.log(msg1);

// const data=function greetings(msg){
//     return "hellp world"+msg;
// }
// const msg1=data("Good Morning");
// console.log(msg1);

// const data=()=>{
//     console.log("hello world");
// }
// data();

// const data=(msg)=>{
//     // console.log("hello world"+msg);
//     return "hello world"+msg;
// }
// const data1=data("Good Morning");
// console.log(data1); 

//LIFE
// (()=>{
//     console.log("hello world");
// })();

// setTimeout(()=>{
//     console.log("hello world");
// }},1000);

// setInterval(()=>{console.log("hello world")},1000);

// function greetings(msg="hello world"){
//     console.log(msg);
// }
// greetings();
// greetings("Good Morning");

function selectLanguage(lang){
    let data;
    if(lang==="java"){
        function javacompiler(){
            return "java compiler";
        }
        data=javacompiler();
    }else if(lang==="python"){
        function pythoncompiler(){
            return "python compiler";
        }
        data=pythoncompiler();
    }else if(lang=="cpp"){
        function cppcompiler(){
            return "cpp compiler";
        }
        data=cppcompiler();
    }
    else{
        data="no compiler found";
    }
    return data; 
}
// const compiler=selectLanguage("java");
// console.log(compiler);
// const compiler1=selectLanguage("python");
// console.log(compiler1);
// const compiler2=selectLanguage("cpp");
// console.log(compiler2);
// const compiler3=selectLanguage("c");
// console.log(compiler3);
console.log(selectLanguage("c"));
