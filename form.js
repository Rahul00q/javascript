let val=() => {

    let inpname=document.querySelector("#name").value
    let inpnum=document.querySelector("#number").value
    let inpemail=document.querySelector("#email").value
    let inppass=document.querySelector("#pass").value
    let inpcpass=document.querySelector("#cpass").value
    
    
    
    
    
    
    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnumber")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")
    
    if (inpname=="") {
    
        errname.innerHTML="Please enter your Name"
        errname.style.color="red"
        document.querySelector("#name").style.border="1px  solid red"
    
        return false
        
    }
    
    else if (inpnum=="") {
    
        errnum.innerHTML="Please enter your Number"
        errnum.style.color="red"
        document.querySelector("#number").style.border="1px  solid red"
    
       
        return false
        
    }
    
    else if (inpnum.length!=10) {
    
        errnum.innerHTML="Please enter 10 digiit Number"
        errnum.style.color="red"
        document.querySelector("#number").style.border="1px  solid red"
    
    
        return false
        
    }
    
    else if (inpemail=="") {
    
        erremail.innerHTML="Please enter your Email"
        erremail.style.color="red"
        document.querySelector("#email").style.border="1px  solid red"
    
       
        return false
    
    }
    
    else if( !(inpemail.includes("@") && inpemail.includes(".com"))) {
    
        erremail.innerHTML="Please enter valid email"
        erremail.style.color="red"
        document.querySelector("#email").style.border="1px  solid red"
    
        return false
        
    }
    
    else if(inppass=="") {
    
        errpass.innerHTML="Please enter your Password"
        errpass.style.color="red"
        document.querySelector("#pass").style.border="1px  solid red"
    
       
        return false
    
    }
    
    
    
    else if( !(inppass.match( [/1234567890/] ) )
           &&!(inppass.match( [/!@#$%^&*()_+/] )) 
           &&!(inppass.match( [/a-z/] )) 
           &&!(inppass.match( [/A-Z/] ))) {
    
        errpass.innerHTML="Please enter Strong Password"
        errpass.style.color="red"
        document.querySelector("#pass").style.border="1px  solid red"
    
        return false
        
    }
    
    
    
    
    else if(inpcpass!=inppass){
        errcpass.innerHTML="Please enter Same Password"
        document.querySelector("#cpass").value="empty"
        document.querySelector("#cpass").focus()
        errcpass.style.color="red"
        document.querySelector("#cpass").style.border="1px  solid red"
    
        
        return false
        
    }
    
    }