<template>
  <v-app style="position: relative">
    <template v-if="!isSSR">
      <v-app-bar id="appBar" class="appBar" app light dense elevation="4" color="rgba(255, 255, 255, 0.5)">
        <v-tabs class="navTab" v-model="activeTab" centered>
          <v-tab to="/" v-bind:key="0" class="TAB grow">
            <span class="tabText">
              <!--              <v-icon dense class="pb-1">mdi-file-outline</v-icon>-->
              简介
            </span>
          </v-tab>
          <v-tab to="/project" v-bind:key="1" class="TAB grow">
            <span class="tabText">
              <!--              <v-icon dense class="pb-1">mdi-account-circle-outline</v-icon>-->
              项目
            </span>
          </v-tab>
          <v-tab to="/about" v-bind:key="2" class="TAB grow">
            <span class="tabText">
              <!--              <v-icon dense class="pb-1">mdi-account-circle-outline</v-icon>-->
              关于
            </span>
          </v-tab>
        </v-tabs>
      </v-app-bar>

      <v-main v-resize="onResize" style="position: relative">
        <v-container fluid>
          <transition
            v-on:appear="routeAppearCaller"
            v-on:enter="routeEnterCaller"
            v-on:leave="routeLeaveCaller"
            v-bind:css="false"
          >
            <router-view />
          </transition>
        </v-container>
      </v-main>
      <v-footer padless style="position: relative">
        <v-col class="text-center"> {{ new Date().getFullYear() }} — <strong>Ridd</strong> </v-col>
      </v-footer>
    </template>
    <template v-else>
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
    </template>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import { gsapRouteEnterFrom, gsapRouteLeaveWhen } from "@/utils/animate";
export default {
  name: "App",
  head: {
    title: "CV",
    meta: [{ name: "CV", content: "CV" }],
  },
  data: () => ({
    activeTab: 0,
    blurTab: true,
    transitionDirection: "up",
    windowSize: undefined,
  }),
  computed: {
    ...mapState({
      isSSR: (state) => state.isSSR,
    }),
  },
  methods: {
    routeAppearCaller(el, done) {
      gsapRouteEnterFrom("down", el, done);
    },
    routeEnterCaller(el, done) {
      // routeEnter(this.transitionDirection, el, done);
      gsapRouteEnterFrom(this.transitionDirection, el, done);
    },
    routeLeaveCaller(el, done) {
      // routeLeave(this.transitionDirection, el, done);
      gsapRouteLeaveWhen(this.transitionDirection, el, done);
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.windowSize.x < 800) {
        this.$store.commit("setFitPhone", true);
      } else {
        this.$store.commit("setFitPhone", false);
      }
      document.querySelector("#appBar").style.width = `${this.windowSize.x}px`;
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch("initStore");
      this.onResize();
      // let { status, data } = await this.$store.dispatch("heartbeat");
      // if (status !== 200 || data.status !== "OK") {
      //   this.$store.commit("showToast", {
      //     type: "error",
      //     message: "无法连接至服务器,请联系管理员",
      //     timer: -1,
      //   });
      // }
    } catch (err) {
      console.log(err);
    }
  },
  watch: {
    $route(to, from) {
      const routerPosition = ["/", "/project", "/about"];
      //找到to.path和from.path在routerDeep数组中的下标
      let toPos = routerPosition.indexOf(to.path);
      let fromPos = routerPosition.indexOf(from.path);
      //临时导航下标确定
      if (from.path.startsWith("/edit")) {
        fromPos = 3;
      } else if (from.path.startsWith("/view")) {
        fromPos = 2;
      }
      if (to.path.startsWith("/edit")) {
        toPos = 3;
      } else if (to.path.startsWith("/view")) {
        toPos = 2;
      }
      this.transitionDirection = toPos > fromPos ? "right" : "left"; //正常导航方向选择
      //类弹窗导航方向选择
      if (to.path === "/login") {
        this.transitionDirection = "up";
      }
      if (from.path === "/login") {
        this.transitionDirection = "down";
      }
      if (to.path.startsWith("/poster")) {
        this.transitionDirection = "up";
      }
      if (from.path.startsWith("/poster")) {
        this.transitionDirection = "down";
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
