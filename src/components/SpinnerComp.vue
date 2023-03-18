<template>
  <div class="spinner"></div>
 </template>

 <script>
 export default{
     mounted(){
     window.addEventListener("load",()=>{
     const spinner = document.querySelector(".spinner");
     spinner.classList.add("spinner-hidden");
     spinner.addEventListener("transitioned",() => {
     document.body.removeChild("spinner");
     })
 })
     }
 }
 </script>
 <style>
 .spinner{
     position: fixed;
     top: 0;
     left: 0;
     width: 100vw;
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: #FCF9F9;
     transition: opacity 0.75s, visibility 0.75s;
 }
 .spinner-hidden{
     opacity: 0;
     visibility: hidden;
 }
 .spinner::after{
     content: "";
     width: 75px;
     height: 75px;
     border:15px solid whitesmoke;
     border-top-color: whitesmoke;
     border-radius: 50%;
     animation: loading 0.75s ease infinite;
 }
 @keyframes spinner{
     from{
         transform: rotate(0turn);
     }
     to{
         transform: rotate(1turn);
     }
 }
 </style>