// Q1.
// function sum (){
//     let a= prompt("what is the sum of  4 + 3");
// if(a==7){
//      alert("congs");
   
// }
// else{
//     alert("fail");
// }
// }
// Q2.
// function sum(){
// let a = prompt("plase enter your name:");
// alert(a.length);
// }
// function sum(){
// const b = prompt("enter");
// alert(b.length);
// }


let Data =[{
    Name:"Rahul",
    Age:23,
    Collage:"Lnct",
    City: "Bhopal"
},{
    Name:"Prem",
    Age:22,
    Collage:"Ias",
    City:"Bhopal"
},{
    Name:"Sachin",
    Age:21,
    Collage:"Mcu",
    City: "Vidisha"
}]
let datashow=document.querySelector("#data")
Data.map((e)=>{
    datashow.innerHTML+=`
    
    <tr>
    <td> ${e.Name}</td>
    <td>${e.Age}</td>
    <td>${e.City}</td>
    <td>${e.Collage}</td>
    
    </tr>
    `

})