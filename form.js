let Val = () => {
    let inpname = document.querySelector("#name").value;
    let inpnum = document.querySelector("#number").value;
    let inpemail = document.querySelector("#email").value;
    let inppass = document.querySelector("#pass").value;
    let inpcpass = document.querySelector("#cpass").value;

    let errname = document.querySelector("#errname");
    let errnum = document.querySelector("#errnumber");
    let erremail = document.querySelector("#erremail");
    let errpass = document.querySelector("#errpass");
    let errcpass = document.querySelector("#errcpass");

    

   

    if (inpname == "") {
        errname.innerHTML = "Please enter your name";
        errname.style.color = "red";
        document.querySelector("#name").style.border = "1px solid red";
        return  false;
    }
  else if(inpnum==" ") {     
    
        errnum.innerHTML = "Please enter your  Number only";
        errnum.style.color = "red";
        document.querySelector("#number").style.border = "1px solid red";
         return false; 

    }
    else if(inpnum.length!=10) {     
    
        errnum.innerHTML = "Please enter 10 digit  Number only";
        errnum.style.color = "red";
        document.querySelector("#number").style.border = "1px solid red";
         return false; 
    }
    else if(!(inpemail.includes("@")&& inpemail.includes(".com"))) {     
    
        erremail.innerHTML = "Please enter valid Email";
        erremail.style.color = "red";
        document.querySelector("#email").style.border = "1px solid red";
         return false; 
         
    }
    else if(inppass != inpcpass) {     
    
        errpass.innerHTML = "Password and confirm password should be same";
        
        errpass.style.color = "red";
        document.querySelector("#pass").style.border = "1px solid red";
        document.querySelector("#cpass").value="";
        document.querySelector("#cpass").focus();
         return false; 
         
    }
   
  
    else if(!(inppass.match([/1234567890/]))
           && !(inppass.match([/!@#$%^&*()_+/]))
           && !(inppass.match([/A-Z/]))
           && !(inppass.match([/a-z/])))
           {
            errpass.innerHTML="Please enter Strong Password";
            return false;
           }

    
};