<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="aboutCard transition-swing" v-bind:class="[marginClass]" :elevation="hover ? 12 : 6" outlined>
        <v-container class="ma-auto pa-auto">
          <v-row no-gutters class="justify-center flex-grow-1 flex-shrink-0">
            <v-col class="flex-grow-0 flex-shrink-1"> </v-col>
            <v-col class="flex-grow-1 flex-shrink-0">
              <p class="text-center text-h4 primary--text ma-auto pa-auto">
                {{ info.titleInfo.name }}
              </p>
              <p class="text-h6 secondary--text mx-0 mt-3 mb-1 pa-0">
                {{ info.titleInfo.phone }} | {{ info.titleInfo.email }}
              </p>
              <a href="https://github.com/RiddMa" rel="noopener" target="_blank">
                {{ info.titleInfo.github }}
              </a>
            </v-col>
            <v-col class="flex-grow-0 flex-shrink-1"> </v-col>
          </v-row>
          <div class="gradient mt-4"></div>

          <v-row no-gutters>
            <span class="text-h6">教育经历</span>
          </v-row>

          <v-row no-gutters>
            <v-col cols="9" class="text-start flex-grow-1 flex-shrink-0">
              <span class="mr-4">{{ info.eduBG.univ }}</span>
              <span class="mr-4">{{ info.eduBG.degree }}</span>
              <span class="mr-4">{{ info.eduBG.major }}</span>
              <span>{{ info.eduBG.school }}</span>
            </v-col>
            <v-col cols="3" class="text-end">
              {{ info.eduBG.span }}
            </v-col>
            <v-row no-gutters>
              <v-col cols="12" class="text-start">
                <span>{{ info.eduBG.course }}</span>
              </v-col>
            </v-row>
          </v-row>

          <v-row no-gutters class="mt-6">
            <span class="text-h6">专业技能</span>
          </v-row>

          <v-row no-gutters>
            <v-col cols="12" class="text-start">
              <span>语言：</span><span>{{ info.skills.language }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="text-start">
              <span>前端：</span><span>{{ info.skills.frontend }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="text-start">
              <span>后端：</span><span>{{ info.skills.backend }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="text-start">
              <span>客户端：</span><span>{{ info.skills.client }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="text-start">
              <span>数据库：</span><span>{{ info.skills.database }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="text-start">
              <span>游戏：</span><span>{{ info.skills.games }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="text-start">
              <span>其他：</span><span>{{ info.skills.others }}</span>
            </v-col>
          </v-row>

          <v-row no-gutters class="mt-6">
            <span class="text-h6">在校项目</span>
          </v-row>
          <div v-for="(item, index) in info.projects" v-bind:key="index">
            <v-row no-gutters>
              <v-col cols="12" class="text-start">
                <span>{{ item }}</span>
              </v-col>
            </v-row>
          </div>

          <v-row no-gutters class="mt-6">
            <span class="text-h6">其他技能与爱好</span>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="text-start">
              <span>摄影：</span><span>{{ info.hobbies.photography }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="text-start">
              <span>？：</span><span>{{ info.hobbies.blueprint }}</span>
            </v-col>
          </v-row>

        </v-container>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
import info from "@/assets/info.json";

export default {
  name: "HomeCard",
  props: {
    fitPhone: {
      required: true,
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      info: info,
    };
  },
  computed: {
    marginClass() {
      if (this.fitPhone) {
        return "ma-0 pa-0";
      } else {
        return "ma-4 px-6 py-6";
      }
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.aboutCard {
  border-color: var(--v-primary-base);
  border-width: 2px;
}

.gradient {
  height: 20px;
  position: relative;
  width: 100%;
  background: radial-gradient(ellipse farthest-side at top center, rgba(0, 0, 0, 0.08), transparent);
}
.gradient:before {
  content: "";
  display: block;
  position: absolute;
  top: 0px;
  right: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(left, transparent, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02), transparent);
}
</style>
