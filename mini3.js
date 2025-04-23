let setAlarm=()=>{

    let  usertime=document.querySelector("#usertime").value //6:03
    let show=document.querySelector("#show")
    let audiosound=document.querySelector("#audioo")

      setInterval(()=>{

         let Time=new Date()
      
//  let alarmtime=`${Time.getHours()}:${Time.getMinutes()}`

       let alarmtime=`${Time.getHours().toString().padStart(2,"0")}:${Time.getMinutes().toString().padStart(2,"0")}`

      

    if (alarmtime==usertime) {
        show.innerHTML="Alarm is ringing"
        audiosound.play()
    }
    else{
        show.innerHTML="Alarm is set"
    }

      },1000)



 
}
let stopAlarm = () => {
    clearInterval(intervalId); 
    if (audio) {
        audio.pause();         
        audio.currentTime = 0; 
    }
    document.querySelector("#show").innerHTML = " Alarm stopped.";
}