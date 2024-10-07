const body=document.body;
const buttons=document.querySelectorAll(".button");
//console.log(buttons)
buttons.forEach((items)=>{
  //console.log(items)
  //console.log(items.id)
  items.addEventListener("click",function(e){
    // console.log(e.target);
    /*So, e.target points to the exact element (like a button or a div) that was clicked. In your code, it's used to dynamically 
    change the background color of the body to the id of the clicked element.*/
    body.style.backgroundColor=e.target.id;
  })
});
