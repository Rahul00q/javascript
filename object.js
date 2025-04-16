  // --------------------------------------------Object-----------------------------------------------------------------
  // Destructuring of objects = is a way to unpack value from objects into variables.;
  // syntax{
  //   const{name,age}=student;
  // }
  // Spritopretor

// key or pairs value

// key:value ;
//  let obj ={ 

//    Name:"Rahul",
//    Age: 25,
//    City: "Bhopal",
//   //  Age:20   key should be unique;
//    // key hmesha unique honi chiye;


//  }
// //  console.log(obj);   // to print full object;
// //  console.log(obj.Age);  // to access object values;
// //  obj.Collage="Cybrom";
// //  obj.Loction="mumbai"; // to insert in object;
// //  obj.Age=26;  //   update the value of objct;
// //  delete obj.City;  // to delete an object key;
//     console.log(obj);   
// ---------------------------------------------------Destructuring------------------------------------------------------
  //  let student={Name:"Ram ",Age:34,City:"Bhopal"}
  //  let{Name,Age,City}=student;
  //  console.log(Name,Age,City);
  //  console.log(Age);
  //  console.log(City);



// -----------------------------------------------Spread-------------------------------------------------------------   
// The Spread operator(...) is used to "Spread" the elements of an object or array into another object or array
   let student={Name:"Ram ",Age:34};
   let student2={grade:"A",City:"Vidisha"};

   const combinedStudent= {...student,...student2};
   console.log(combinedStudent);