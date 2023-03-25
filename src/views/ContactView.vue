<template>
  <div id="everything">
    <div class="container text-center">
      <div class="row">
        <div class="formy col">
          <h1>Contact Us</h1>
            <form action="https://formspree.io/f/xoqzwqgn" method="POST" class="row g-3">
              <div class="col-md-4">
                <label for="validationDefault01" class="form-label">First name</label>
                <input type="text" class="form-control" id="validationDefault01" name="name" required>
              </div>
              <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationDefault02" name="name" required>
              </div>
              <div class="col-md-4">
                <label for="validationDefaultUsername" class="form-label">Email address</label>
                <div class="input-group">
                  <span class="input-group-text" id="inputGroupPrepend2">@</span>
                  <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" name="name" required>
                </div>
              </div>
              <div class="col-md-3">
                <label for="validationDefault05" class="form-label">Zip</label>
                <input type="text" class="form-control" id="validationDefault05" name="number" required>
              </div>
              <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Message</label>
                <input type="message" class="form-control" id="validationDefault02" name="name" required>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" name="text" required>
                  <label class="form-check-label" for="invalidCheck2">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-light" type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div class="col formy2">
         <img src="https://i.postimg.cc/nzB47xpz/history.jpg" alt="his">  
          </div>
      </div>
      <div class="info">
      <p><i class="fa-sharp fa-solid fa-building"></i> Address: 314 IMAM RD <br>LANSDOWNE<br>7745</p>
      <p><i class="fa-solid fa-phone"></i> Contact:(021) 1233 562</p>
      <p><i class="fa-sharp fa-solid fa-envelope"></i> Email: thetribe@gmail.com</p>
    </div>
    </div>

  </div>
    
  </template>
  
  <script>
  export default {
      name:'contactView',
      
  }
  </script>
  
  <style scoped>
  #everything{
    height: 125vh;
    background-image: url(https://i.postimg.cc/tgQmsY5c/1392648048498543991simple-black-background.jpg);
    background-repeat: repeat;
    background-size: cover;
  }
  .container{
  padding-bottom: 1rem;
  height: 100vh;
  }
  h1{
    color: white;
    text-transform: uppercase;
  }
  .formy{
    
    width: 50%; 
    padding: 2%;
    padding-top: 195px;
    height: 100vh;
    
  } 

  .formy2{
    
    height: 100vh;
  
  }
  
  .info{
    animation: 2s anim-lineUp ease-out infinite;
  color:pink;
  font-size:2rem;
  font-family:"Copperplate","Lucida Handwriting";
}
@keyframes anim-lineUp {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@media screen and (min-width: 300px) and (max-width:719px){
  .lineUp{
    font-size:1rem;
  }
}
  
  .form-check-label{
    color:whitesmoke;
    font-family:"Copperplate","Lucida Handwriting";
  }
  .form-label{
    color:whitesmoke;
    font-family:"Copperplate","Lucida Handwriting";
  }
  
  p{
    font-weight: bolder;
    font-style: italic;
    font-size: large;
    color:whitesmoke;
    
  }
  img{
    height: 80vh;
    padding-top: 120px;
  }
      
  </style>