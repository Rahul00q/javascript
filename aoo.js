let  Data=[{
    name:"Raju",
    Age:26,
    City:"Kanpur",
    Collage:"Kit"
},{
    name:"Rahul",
    Age:24,
    City:"Vidisha",
    Collage:"Lnct"
},{
    name:"Neeraj",
    Age:21,
    City:"Pune",
    Collage:"Bu"
},{
    name:"Prem",
    Age:25,
    City:"Bhopal",
    Collage:"Rgpv"
},{
    name:"Ram",
    Age:24,
    City:"Vidisha",
    Collage:"Mcu"
}]
let datashow=document.querySelector("#data")
Data.map((e)=>{
 
datashow.innerHTML+= `

<tr>
<td>   ${e.name}</td>
<td>   ${e.Age}</td>
<td>   ${e.City}</td>
<td>   ${e.Collage}</td>

</tr>


`
})


