let fetchData=async()=>{
    let url="http://localhost:3000/Hotel"
    let res = await fetch(url,{method:"GET"})
    let Data =await res.json()
    console.log(Data);



let data=document.querySelector("#Data")
Data.map((e)=>{
    try{
    data.innerHTML+=`
      <tr>
           <td>${e.Name} </td>
           <td>${e.Age} </td>
           <td>${e.AadharNo}</td>
           <td>${e.Checkin}</td>
           <td>${e.Checkout}</td>
            <td>${e.City}</td>
           <td>${e.Person}</td>
           <td>${e.Price}</td>
           <td onclick="Del('${e.id}')">Delete</td>

      </tr>
    
    `
    }
    catch(err){
          console.log(err ,"404 error");
    }
})

}

let Del=(id)=>{
    let url=`http://localhost:3000/Hotel/${id}`
    fetch(url,{method:"DELETE"})
}

fetchData()



// .than and .catch  error handling;