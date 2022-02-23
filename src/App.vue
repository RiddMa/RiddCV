<template>
  <v-app style="position: relative">
    <template v-if="!isSSR">
      <v-app-bar id="appBar" class="appBar" v-if="!isPrint" app light dense elevation="4" color="rgba(255, 255, 255, 0.5)">
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
        <v-col class="text-center NoPrint"> {{ new Date().getFullYear() }} — <strong>Ridd</strong> </v-col>
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
    title: "马嘉骥-简历",
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
    isPrint() {
      return this.$route.name === "Print";
    },
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
      this.transitionDirection = toPos > fromPos ? "right" : "left"; //正常导航方向选择
    },
  },
};
</script>

<style>
body {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Source Han Sans CN", "Hiragino Sans GB", "Heiti SC",
    "Microsoft YaHei UI", "WenQuanYi Micro Hei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Source Han Sans CN", "Hiragino Sans GB", "Heiti SC",
    "Microsoft YaHei UI", "WenQuanYi Micro Hei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

.appBar {
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
}
.navTab {
  z-index: 19999;
}
.TAB {
  min-width: 25px;
  max-width: 150px;
}
.tabText {
  white-space: nowrap;
  display: inline-block;
}

@media print {
  .NoPrint {
    display: none;
  }
}
</style>
