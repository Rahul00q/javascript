// Day -1 0f strings method;

// let a1= "this is frist";
// let a2= "this is second";
// let a3= "thisisString123";
// let a4= "IamfromCybromMpNagar";
// //  1. replace(); 2. slice(); 3. split();


// console.log(a1.length);  // returns length of string;
// document.writeln(a1.concat(a2));  // add 2 or more  or strings;

// document.write("<br>"+ a1.toLowerCase());   // 
// document.write(a2.toUpperCase());        //

// document.write("<br>"+a1.charAt(2));   //
// document.write("<br>"+a2.charCodeAt(2));   //  
// document.write("<br>"+a2.indexOf("t"));  //
// document.write("<br>"+a2.slice(2,5));    //
// document.write("<br>"+a3.slice(6,12));   //
// document.write("<br>"+a4.slice(7,13));    //
// document.write("<br>"+a3.substring());    //
// slice ek element km work krta hai;



// ----------------------------------------------------------------------------------------------------------------
   //      <replace>;
// Day -2 of string method;
//  replace method are using to searching;
// let str="JavaScript is fun loving and JavaScript is Easy";
// document.write("<br>"+str.replace("JavaScript","HTML")); // frist me jo hoga bo ;
// document.write("<br>"+str.replaceAll("JavaScript","HTML")); // jis word ko bola hai bo jitni jagha hoga ho jyega;
// document.write("<br>"+str.replace(/JavaScript/gi,"HTML"));    // g=> Convert globally ....  i=>case insensitive;





                   //    <  trim >  ;
// let st="      JavaScript is fun loving and JavaScript is Easy";

// console.log(st.trim());



           //  < split  >  ;

// let spl1="Con-vert it in-to ar-ray";
// console.log(spl1.split("-"));
// let arr=[1,2,4,5,6, "Rahul", "meena"];         // Array  collection of  sem or diffrent  data type  ;



// IMP ;
// ----------------------------------Template Letrals (` `) " Back tick "--------------------------------------------------;

function sach(){
    alert(`Hello i am "Rahul" and i am from 'Bhopal' `);
}
sach();

let a = `hello <h1> rahul </h1>
meena `;

document.write(a);
let name = "Rahul";
let age = 24;
let c= `Hello i am ${name} and i am ${age} years old`;
console.log(c);

// 1st use =  Supports Single Quotes('')  and Double("");
// 2nd use =  Supports Multi-Line String;
// 3rd use =  Supports HTML Tags;
// 4th use =  Supports  
                    