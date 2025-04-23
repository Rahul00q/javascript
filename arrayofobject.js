// let arr1=["Apple","Banana"]   //  array

// let fruits={
//     name:"rahul",            //  object
//     age: 23
// }


// Array of object

let UserData=[{
    name:"Rahul",
    age:23,
    city:"Indore"
},{
    name:"Prem",
    age:22,
    city:"Bhopal"
},{
    name:"Sachin",
    age:21,
    city:"Vidisha"
}
    ,{
        name:"Ram",
        age: 20,
        city:"Pune"
    }]

let datashow=document.querySelector("#datashow")
UserData.map((e)=>{
     
    datashow.innerHTML+= `
    
    <tr>
    <td>   ${e.name}</td>
    <td>   ${e.age}</td>
    <td>   ${e.city}</td>

    </tr>
    
    
    `



// localStorage.setItem("name","value")
// localStorage.getItem("name")
// datashow.innerHTML="name"
//   import and export;
//  name export and name dexport;

})
//    templet letrails