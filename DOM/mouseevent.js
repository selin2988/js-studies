const btn=document.querySelector("#btn");

btn.addEventListener("click",uyar);
btn.addEventListener("mouseleave",uyar);



function uyar(event){

    event.preventDefault();
    if(event.type=="click"){
        alert("Fareye tıkladınız");  
    }else if(event.type=="mouseleave"){
        alert("Butondan çıktınız.");
    }


}