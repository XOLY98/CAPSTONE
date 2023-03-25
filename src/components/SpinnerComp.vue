<template>
  <div class = "spinner">
    <div class = "head">
  </div>
  </div>
 </template>

 <script>
 
 </script>
 <style>
 .spinner {
   width: 1em;
   height: 1em;
   border-top: 1rem solid #6da9f5;
   border-right: 1rem solid transparent;
   border-radius: 50%;
   margin: auto;
   animation: spinner 0.6s linear infinite;
 }
 .head {
   width: 1em;
   height: 1em;
   background-color: #6da9f5;
   border-radius: 50%;
   margin-left: 8.5em;
   margin-top: 0.5em;
 }
 @keyframes spinner {
   100% { transform: rotate(360deg) }
 }
   
 </style>