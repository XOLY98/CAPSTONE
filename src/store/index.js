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
    setProduct(state, values) {
      state.catalogues = values;
    },
    setItem(state, value) {
      state.product = value;
    },
    showSpinner(state, value){
      state.showSpinner = value
    }
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


