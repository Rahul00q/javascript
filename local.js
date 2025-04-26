let Signup=()=>{
    let Signname=document.querySelector("#signname").value
    let Signemail=document.querySelector("#signemail").value
    let Signnum=document.querySelector("#signnum").value
    let Signpass=document.querySelector("#signpass").value
    let Signcpass=document.querySelector("#signcpass").value


    if(Signname==""){
        document.querySelector("#errorname").innerHTML="enter name"
        return false
    }

    localStorage.setItem("Email", Signemail)
    localStorage.setItem("Name", Signname)
    localStorage.setItem("Number", Signnum)
    localStorage.setItem("Password", Signpass)
    localStorage.setItem("CPassword", Signcpass)

    location.href="locallogin.html"
    return false
}


let Login=()=>{
    let loginname=document.querySelector("#loginname").value 
    let loginpass=document.querySelector("#loginpass").value 

    let LocalName=localStorage.getItem("Name")
    let LocalPass = localStorage.getItem("Password")


    if(loginname==LocalName && loginpass==LocalPass){
        location.href="localhome.html"
        return false
    }
    else{
        alert("inccorrect name or password")
    }
    return false
}