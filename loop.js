 // ------------------------------------------for in loop------------------------------------------------------------------
// let fruits={
//     name:"rahul",
//     age:24,
//     city:"vidisha"
// }
// for(let ram in fruits){
//     console.log(ram," "+ fruits[ram])
//     // console.log(value)
// }
// // ---------------------------------------for of loop-----------------------------------------------------------------------
// let arr1=["ram","meena","vidisha"]

// for(let raj of arr1){
//     console.log(raj);
// }




//---------------------------------------------map loop----------------------------------------------------------------
// call back function= bo hota hai jo prameters me pass kiya jata hai;
// heigher order function = jo aapne prameters me ek function ko leta hai;  map ek heigher order function hai;

// let num=[2,3,6,5,18,8,4];
// let newarr=num.map((e)=>{          //     e is a event;


//     return e*2;
// })
// // let newarr=num.map((e)=>e*2)  // Arrow function 
// console.log(num);
// console.log(newarr);


// -----------------------------------------filter loop----------------------------------------------------------------

// let num=[2,3,6,5,18,8,4];
// let newarr=num.filter((e)=>{


//     return e%2==0;         // even number code ;
// })

// console.log(newarr);


// let num=[2,3,6,5,18,8,4];
// let newarr=num.filter((e)=>{


//     return e>6;        
// })

// console.log(newarr);




// -------------------------------------for each loop--------------------------------------------------
// for each loop ek normal loop hai yha reteun nii krta hai;
// for each loop are rear used in java script ;

let num=[2,3,6,5,18,8,4];
 newarr=num.forEach((e)=>{

    console.log(e*2);
           
})


