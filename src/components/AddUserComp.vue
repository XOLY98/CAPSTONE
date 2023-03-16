<template>
    
    <div class="admin">
        <h1>USERS</h1>
    
<table class="table">
    <thead>
      <tr>
        <th scope="col">PICTURE</th>
        <th scope="col">NAME</th>
        <th scope="col">SURNAME</th>
        <th scope="col">GENDER</th>
        <th scope="col">EMAIL ADDRESS</th>
        <th scope="col"><i class="fa-sharp fa-solid fa-pen-to-square"></i></th>
        <th scope="col"><i class="fa-sharp fa-solid fa-trash"></i></th>
      </tr>
    </thead>
    <tbody v-for="item in Users" :key="item.userID">
      <img :src="item.userProfile" class="card-img-top" alt="...">
      <tr>
        <th scope="row"></th>
        <td> {{item.firstName}}</td>
        <td>{{item.lastName}}</td>
        <td>{{item.gender}}</td>
        <td>{{item.emailAdd}}</td>
        <td><button type="button" class="btn btn-outline-light" ><i class="fa-sharp fa-solid fa-pen-to-square"></i></button></td>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit user</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form  @submit.prevent="edit">
        
                    <input type="number" placeholder="id" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.userID">
                    <input type="text" placeholder="Firstname" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.firstName">
                    <input type="text" placeholder="Lastname" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.lastName">  
                    <input type="text" placeholder="gender" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.gender">
                    <input type="email" placeholder="Email" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.emailAdd">
                    <input type="text" placeholder="image" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.userProfile">
                    <input type="text" placeholder="Enter Password" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.userPass">
                   
        
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary"  v-on:click="edit">Save changes</button>
              </div>
            </div>
          </div>
        </div>




        
        <td><button
          type="button"
          class="btn btn-outline-light"
          
        >
        <i class="fa-sharp fa-solid fa-trash"></i>
        </button></td>
     </tr>
    </tbody>
  </table>


</div>

</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
  const payload={
     userID:'',
     firstName:'',
     lastName:'',
     gender:'',
     emailAdd:'',
     userPass:'',
     userProfile:''
    };
  
    const store = useStore();
    store.dispatch("fetchUsers");
    const Users = computed(() => store.state.users);
    const edit = () => {
            store.dispatch("updateUser", payload)
            store.dispatch("fetchUsers");
            console.log(payload);
        }
    return {
      Users,
      edit,
      payload
    };
  },

};
</script>

<style scoped>
.admin{
    padding-top: 7rem;
}
.table thead th{
    color:whitesmoke;
    font-size: larger;
    text-align: center;
    
  }
  h1{
    color:#E3BC94;
    font-size:30px;
    text-decoration: underline;
    text-shadow: #E3BC94 5px 5px 5px ;
  }
    .table{
      background-color:transparent;
      color:whitesmoke;
      width: 80%;
      margin-left: 9%;
      transform: translateX('30%') ;
    }
    .table :hover{
      opacity: 0.9;
      color:pink;
      background-color: transparent;
    }

    button{
      transform: translateX('50%') ;
    }

    img{
        width: 3.5rem;
        height:4rem;
        border:solid whitesmoke 3px;
      }
</style>