<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="homeCard transition-swing" v-bind:class="[marginClass]" :elevation="hover ? 12 : 6" outlined>
        <v-container v-if="page === 1" class="ma-auto pa-auto">
          <v-row no-gutters class="justify-center flex-grow-1 flex-shrink-0">
            <v-col class="flex-grow-0 flex-shrink-1"> </v-col>
            <v-col class="flex-grow-1 flex-shrink-0">
              <v-row no-gutters class="justify-center text-h4 primary--text mt-1">
                <span>{{ info.titleInfo.name }}</span>
              </v-row>
              <v-row no-gutters class="justify-center secondary--text mt-2">
                <span>
                  电话：{{ info.titleInfo.phone }} | 微信号：{{ info.titleInfo.wechat }} | 邮箱：{{
                    info.titleInfo.email
                  }}
                </span>
              </v-row>
              <v-row no-gutters class="justify-center secondary--text">
                <span>Github：</span>
                <a href="https://github.com/RiddMa" rel="noopener" target="_blank" class="secondary--text">
                  {{ info.titleInfo.github }}
                </a>
              </v-row>
            </v-col>
            <v-col class="flex-grow-0 flex-shrink-1"> </v-col>
          </v-row>
          <div class="gradient mt-4"></div>

          <v-row no-gutters>
            <span class="text-h6">教育经历</span>
          </v-row>

          <v-row no-gutters class="mt-3">
            <v-col cols="2" class="text-start">
              <span class="font-weight-bold">{{ info.eduBG.univ }}</span>
            </v-col>
            <v-col cols="7" class="text-start">
              <span class="mr-4">{{ info.eduBG.major }}</span>
              <span class="mr-4">{{ info.eduBG.degree }}</span>
              <span>{{ info.eduBG.school }}</span>
            </v-col>
            <v-col cols="3" class="text-end">
              <span>{{ info.eduBG.span }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters class="mt-3">
            <v-col cols="2" class="text-start">
              <span class="font-weight-bold">相关课程</span>
            </v-col>
            <v-col class="text-start">
              <span>{{ info.eduBG.course }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters class="mt-3">
            <v-col cols="2" class="text-start">
              <span class="font-weight-bold">英语能力</span>
            </v-col>
            <v-col class="text-start">
              <span>{{ info.eduBG.english }}</span>
            </v-col>
          </v-row>

          <v-row no-gutters class="mt-7">
            <span class="text-h6">专业技能</span>
          </v-row>

          <v-row no-gutters class="mt-3">
            <v-col cols="1" class="text-start firstCol">
              <span class="font-weight-bold">语言</span>
            </v-col>
            <v-col class="text-start">
              <span>{{ info.skills.language }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters class="mt-3">
            <v-col cols="1" class="text-start firstCol">
              <span class="font-weight-bold">前端</span>
            </v-col>
            <v-col class="text-start">
              <span>{{ info.skills.frontend }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters class="mt-3">
            <v-col cols="1" class="text-start firstCol">
              <span class="font-weight-bold">后端</span>
            </v-col>
            <v-col class="text-start">
              <span>{{ info.skills.backend }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters class="mt-3">
            <v-col cols="1" class="text-start firstCol">
              <span class="font-weight-bold">客户端</span>
            </v-col>
            <v-col class="text-start">
              <v-row no-gutters>
                <span>{{ info.skills.client.a }}</span>
              </v-row>
              <v-row no-gutters>
                <span>{{ info.skills.client.b }}</span>
              </v-row>
            </v-col>
          </v-row>
          <v-row no-gutters class="mt-3">
            <v-col cols="1" class="text-start firstCol">
              <span class="font-weight-bold">数据库</span>
            </v-col>
            <v-col class="text-start">
              <v-row no-gutters>
                <span>{{ info.skills.database.a }}</span>
              </v-row>
              <v-row no-gutters>
                <span>{{ info.skills.database.b }}</span>
              </v-row>
            </v-col>
          </v-row>
          <v-row no-gutters class="mt-3">
            <v-col cols="1" class="text-start firstCol">
              <span class="font-weight-bold">游戏</span>
            </v-col>
            <v-col class="text-start">
              <span>{{ info.skills.games }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters class="mt-3">
            <v-col cols="1" class="text-start firstCol">
              <span class="font-weight-bold">其他</span>
            </v-col>
            <v-col class="text-start">
              <span>{{ info.skills.others }}</span>
            </v-col>
          </v-row>

          <v-row no-gutters class="mt-6">
            <span class="text-h6">项目</span>
          </v-row>

          <v-row no-gutters class="mt-3">
            <v-row no-gutters>
              <v-col cols="2" class="text-start">
                <span class="font-weight-bold">{{ info.projects.magn.name }}</span>
              </v-col>
              <v-col cols="10" class="text-end">
                <span>{{ info.projects.magn.desc }}</span>
              </v-col>
            </v-row>
            <span class="text-start mt-2">{{ info.projects.magn.situation }}</span>
            <span class="text-start mt-2">{{ info.projects.magn.work1 }}</span>
            <span class="text-start mt-2">{{ info.projects.magn.work2 }}</span>
            <span class="text-start mt-2">{{ info.projects.magn.work3 }}</span>
            <span class="text-start mt-2">{{ info.projects.magn.website }}</span>
            <a href="https://riddma.com" rel="noopener" target="_blank" class="ml-1 mt-2">
              {{ info.projects.magn.link }}
            </a>
          </v-row>
        </v-container>

        <v-container v-if="page === 2" class="ma-auto pa-auto">
          <v-row no-gutters class="mt-4">
            <v-row no-gutters>
              <v-col cols="5" class="text-start">
                <span class="font-weight-bold">{{ info.projects.graduation.name }}</span>
              </v-col>
              <v-col cols="7" class="text-end">
                <span>{{ info.projects.graduation.desc }}</span>
              </v-col>
            </v-row>
            <span class="text-start mt-2">{{ info.projects.graduation.situation }}</span>
            <span class="text-start mt-2">{{ info.projects.graduation.work1 }}</span>
            <span class="text-start mt-2">{{ info.projects.graduation.note }}</span>
          </v-row>

          <v-row no-gutters class="mt-4">
            <v-row no-gutters>
              <v-col cols="5" class="text-start">
                <span class="font-weight-bold">{{ info.projects.hotelAC.name }}</span>
              </v-col>
              <v-col cols="7" class="text-end">
                <span>{{ info.projects.hotelAC.desc }}</span>
              </v-col>
            </v-row>
            <span class="text-start mt-2">{{ info.projects.hotelAC.situation }}</span>
            <span class="text-start mt-2">{{ info.projects.hotelAC.work1 }}</span>
            <span class="text-start mt-2">{{ info.projects.hotelAC.work2 }}</span>
          </v-row>

          <v-row no-gutters class="mt-4">
            <v-col cols="12" class="text-start flex-grow-1 flex-shrink-0">
              <span class="font-weight-bold">其他</span>
            </v-col>
          </v-row>
          <v-row no-gutters v-for="(item, index) in info.projects.others" v-bind:key="index" class="text-start mt-2">
            <v-col cols="12" class="text-start">
              <span>{{ item }}</span>
            </v-col>
          </v-row>

          <!--          <div v-for="(item, index) in info.projects" v-bind:key="index">-->
          <!--            <v-row no-gutters>-->
          <!--              <v-col cols="12" class="text-start">-->
          <!--                <span>{{ item }}</span>-->
          <!--              </v-col>-->
          <!--            </v-row>-->
          <!--          </div>-->

          <v-row no-gutters class="mt-6">
            <span class="text-h6">其他经历与爱好</span>
          </v-row>

          <v-row no-gutters class="mt-2">
            <v-col cols="1" class="text-start firstCol">
              <span class="font-weight-bold">摄影</span>
            </v-col>
            <v-col class="text-start">
              <span>{{ info.hobbies.photography.a }}</span>
              <br />
              <span>{{ info.hobbies.photography.b }}</span>
            </v-col>
          </v-row>

          <v-row no-gutters class="mt-2">
            <v-col cols="1" class="text-start firstCol">
              <span class="font-weight-bold">双创大赛</span>
            </v-col>
            <v-col class="text-start">
              <span>{{ info.hobbies.blueprint.a }}</span>
              <br />
              <span>{{ info.hobbies.blueprint.b }}</span>
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
  name: "HomeCard4Print",
  props: {
    fitPhone: {
      required: true,
      type: Boolean,
      default() {
        return false;
      },
    },
    page: {
      required: true,
      type: Number,
      default() {
        return 1;
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
        return "ma-4 pa-4";
        // return "ma-0 pa-0";
      }
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped src="../styles/cardBase.css"></style>
<style scoped>
.homeCard {
  border-color: var(--v-primary-base);
  border-width: 2px;
  /*height: 1300px;*/
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

.firstCol {
  margin-right: 1rem;
}
</style>
