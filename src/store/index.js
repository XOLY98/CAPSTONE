import axios from "axios";
import { createStore } from "vuex";
const bedURL = "https://capstone-vr9h.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null,
    loggedUser:null
  },
  getters: {
    getUsers:(state)=>state.users,

    showsSpinner(state) {
      return state.showSpinner
    }
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, value) {
      state.user = value;
    },
    setMessage(state, value) {
      state.message = value;
    },
    setProducts(state, values) {
      state.products = values;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setItem(state, value) {
      state.product = value;
    },
    showSpinner(state, value){
      state.showSpinner = value
    },
    setLoggedUser(state, value) {
      state.user = value;
    },
  },
  actions: {
    async fetchUsers(context) {
      const res = await axios.get(`${bedURL}Users`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      } else {
        context.commit("setMessage", err);
      }
    },

    async updateProduct(context,payload){
      const res = await axios.put(`${bedURL}product/${payload.id}`,payload);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProduct", results);
      } else {
        context.commit("setMessage", err);
      
    }},
    async fetchSingleProduct(context,id) {
      const res = await axios.get(`${bedURL}product/${id}`,);
      const { results, err } = await res.data;
      if (results) {
        context.commit('setProduct', results[0])
      } else {
        context.commit('setMessage', err)
      }
    },
    async updateUser(context,payload){
      const res = await axios.put(`${bedURL}user/${payload.userID}`,payload);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
      } else {
        context.commit("setMessage", err);
      
    }},


    async register (context, payload) {
      const res = await axios.post(`${bedURL}register`,payload);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setMessage", results);
      } else {
        context.commit("setMessage", err);
      }
    },

    async login (context, payload) {
      const res = await axios.post(`${bedURL}login`,payload);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setLoggedUser", results);
        console.log(results);

        context.commit("setMessage", results);
      } else {
        context.commit("setMessage", err);
      }
    },


    async fetchProducts(context) {
      context.commit('showSpinner', true)

      const res = await axios.get(`${bedURL}Products`);
      const { results, err } = await res.data;
      if (results) {
        // console.log(results);
        context.commit("setProducts", results);
        context.commit("showSpinner", false);
      } else {
        context.commit("setItem", err);
        context.commit("showSpinner", true);
      }
    },
  },
  modules: {},
});


