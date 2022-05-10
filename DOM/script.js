// let h1 = document.querySelector(".blueText");
// // h1.className="redText";
// // h1.classList.add("redText");
// let btn = document.querySelector("#changeIt");

// let count = 0;
// btn.addEventListener("click", function () {
//     if (count == 0) {
//         h1.classList.add("redText");
//         count = 1;
//     } else {
//         h1.classList.remove("redText");
//         count = 0;
//     }

// });

// let listItems=document.getElementsByClassName("list-item");
// console.log(listItems);
// for(let i=0;i<listItems.length;i++){
//     listItems[i].textContent=i + " Item";
// }

const listItems=document.querySelectorAll(".list-item");
 listItems.forEach(function(item){
     
 })

 listItems.forEach(function(item){
     item.addEventListener("click",function(event){
        if(event.target.className=="link"){ 
        event.target,parentElement.remove();
    }
    event.preventDefault();
     })
 });

 const ul=document.querySelector("ul");
 ul.addEventListener("click",function(event))
