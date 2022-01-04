import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import QS from "qs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSSR: false,
    fitPhone: false,
  },
  mutations: {
    setIsSSR(state, toBool) {
      state.isSSR = toBool;
    },
    setFitPhone(state, toBool) {
      state.fitPhone = toBool;
    },
  },
  actions: {
    initStore(context) {
      // let newInstance = axios.create({
      //   baseURL: "https://www.riddma.com/api/",
      //   // baseURL: "http://localhost:8090/api/",
      //   method: "post",
      //   timeout: 10000,
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      //   withCredentials: false,
      //   paramsSerializer: function (params) {
      //     return QS.stringify(params, { arrayFormat: "brackets" });
      //   },
      // });
      // newInstance.interceptors.request.use(
      //   (config) => {
      //     const token = localStorage.getItem("token");
      //     if (token) {
      //       // Bearer是JWT的认证头部信息
      //       config.headers.common["Authorization"] = "Bearer " + token;
      //     }
      //     return config;
      //   },
      //   (error) => {
      //     return Promise.error(error);
      //   }
      // );
      // context.state.instance = newInstance;
    },
  },
  modules: {},
});
