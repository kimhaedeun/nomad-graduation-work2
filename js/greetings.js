const loginForm =document.querySelector("#login-form")
const loginInput=document.querySelector("#login-form input");
const link=document.querySelector("a");
const greeting=document.querySelector("#greeting")

const USERNAME_KEY="username";
const HIDDEN_CLASSNAME="hidden";

function onLoginSubmit(tomato){
   tomato.preventDefault();
   localStorage.setItem( USERNAME_KEY,loginInput.value)
   loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
   
}

function paintGreetings(){
   const username=localStorage.getItem(USERNAME_KEY);
   greeting.innerText=`hello ${username} ☺`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit",onLoginSubmit);
}else {
   paintGreetings();
}