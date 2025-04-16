let show=document.querySelector("#text")

let a = () => {
    
    if(show.style.display=="block"){
    show.style.display="none"
    b.innerHTML="Show"
    }
    else if (show.style.display="none"){
        show.style.display="block"
         b.innerHTML="hide"
    }
}
