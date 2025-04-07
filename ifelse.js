// if else use to check the condition based on different parameters;
// if the condition fulfil, it will give true itherwise false;
// if else ka use multiple conditions me use kiya jata hai;
// function check(){
//     var a = document.getElementById("num").value;
//     if(a>=27){
//         document.write("congrats you are selected");
//     }
//     else{
//         document.write("you are not selected");

//     }
// }

// function check(){
//     var a = document.getElementById("num").value;
//     if(a>=300){
//         document.write("congrats you are selected");
//     }
//     else if(a>=225){
//         document.write("you are  selected");

//     }
//     else if(a>=165){
//         document.write("you are  selected in this case");

//     }
//     else{
//         document.write("you are fail");

//     }
// }

function check(){
    var a =document.getElementById("n1").value;
    var b =document.getElementById("n2").value;
    var c =document.getElementById("n3").value;
    var d =document.getElementById("n4").value;
    var e =document.getElementById("n5").value;
    var total=a+b+c+d+e;
    var perc=(total*100/500);
    document.write("Total Marks =" +total);
    document.write("Percentage = " +perc);
}