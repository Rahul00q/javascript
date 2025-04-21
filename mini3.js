let setAlaram=()=>{
    let usertime=document.querySelector("#usertime").value 
    let show=document.querySelector("#show")
    // console.log(usertime)
    let time=new Date()

    let Alaramtime=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    
    if(Alaramtime==usertime){
          show.innerHTML="Alaram is Ringing"
    }
    
    
    
    







}