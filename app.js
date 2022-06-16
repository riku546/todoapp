const addTask=document.querySelector(".add-task");

const addTaskForm=document.querySelector(".add-task-form");
const WeekChars = [ "sun", "mon", "tues", "wednes", "thurs", "fri", "sat" ];
const today=new Date();
const date=today.getDate();
const month=today.getMonth()+1;
const dateText=document.querySelector(".date");
const dayOW=today.getDay();

const plus=document.querySelector(".plus");
const  formLayout=document.querySelector(".form-Layout");
const newTODO=document.querySelector(".new-todo");
const dateFunction=()=>{
  dateText.textContent=month+"月"+date+"日"+"("+WeekChars[dayOW]+")";
}

const alreadyCompletedPart=document.querySelector(".already-completed-part");
const alreadys=document.querySelector(".alreadys");
const alreadysImg=document.querySelector(".alreadys-img");
const alreadyTasks=document.querySelector(".already-tasks");




const newTaskCreate=()=>{

  const newTaskCreateElement=()=>{
     const newTexts=document.createElement("div");
   const newContent=document.createElement("div");
   const cheack=document.createElement("img");
   const newText=document.createElement("p");
   const imgs=document.createElement("div");
  //  const important=document.createElement("img");
   const remove=document.createElement("img");
   
   newTexts.classList.add("new-texts");
   newContent.classList.add("new-content");
   cheack.classList.add("cheack");
   newText.classList.add("new-text");
   imgs.classList.add("imgs");
  //  important.classList.add("important");
   remove.classList.add("remove");


 newTODO.appendChild(newTexts);
 newTexts.appendChild(newContent);
 newContent.appendChild(cheack);
 newContent.appendChild(newText);

 newTexts.appendChild(imgs);
//  imgs.appendChild(important);
 imgs.appendChild(remove);

console.log(newTexts);

  let addTaskFormText= addTaskForm.value;
newText.innerHTML=addTaskFormText;
addTaskForm.value="";
newTexts.classList.add("form-Layout");
cheack.src="https://i2.wp.com/ai-catcher.com/wp-content/uploads/icon_139-1.png?fit=40%2C40&ssl=1";
// important.src='https://img.icons8.com/color/40/christmas-star.png';
remove.src='https://img.icons8.com/nolan/40/waste.png';



// alreadys.addEventListener("click",()=>{

//   const alreadysImgSrc=alreadysImg.src;
// console.log(alreadysImgSrc);


// if(alreadysImgSrc=="https://icooon-mono.com/i/icon_12255/icon_122551_64.png"){
//   alreadysImg.src="https://icooon-mono.com/i/icon_12253/icon_122531_64.png";
//   alreadyTasks.classList.remove("click");

// }else{
//   alreadysImg.src="https://icooon-mono.com/i/icon_12255/icon_122551_64.png";
// alreadyTasks.classList.add("click"); 




// }

// })



cheack.addEventListener("click",()=>{

  const cheackParent=cheack.parentElement;
  const newContentParent=cheackParent.parentElement;
  cheack.src="https://icooon-mono.com/i/icon_11453/icon_114531_64.png";
setTimeout(() => {
  newContentParent.remove();
}, 1000);
// newContentParent.remove();
 
  });
 
  
  remove.addEventListener("click",()=>{
  const removeImgs=remove.parentElement;
  const removeNewTexs=removeImgs.parentElement;
  removeNewTexs.remove();
  });
  
  // important.addEventListener("click",()=>{
 

  // });
  }
  



plus.addEventListener("click",()=>{
  if(addTaskForm.value==""){
  window.alert("no task");
  }else{
  newTaskCreateElement();
}  
  
});




addTaskForm.addEventListener("keypress",test_ivent);


function test_ivent(e) {
  if (e.keyCode === 13) {
    if(addTaskForm.value==""){
      window.alert("no task");
      }else{
      newTaskCreateElement();
  
   }  
     return false;
} 

};








}










newTaskCreate();


dateFunction();




