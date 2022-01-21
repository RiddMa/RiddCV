<template>
  <v-container id="cv" fluid class="ma-0 pa-0">
    <v-row no-gutters class="justify-center ma-0 pa-0">
      <v-col class="homeBase ma-0 pa-0">
        <HomeCard :fit-phone="fitPhone" :page="1"></HomeCard>
      </v-col>
    </v-row>
    <div class="text-center" style="page-break-after: always; width: 100%">下续</div>
    <br />
    <v-row no-gutters class="justify-center ma-0 pa-0">
      <v-col class="homeBase ma-0 pa-0">
        <HomeCard :fit-phone="fitPhone" :page="2"></HomeCard>
      </v-col>
    </v-row>
    <div class="text-center" style="width: 100%">
      <span>此文档网页版见 </span>
      <a href="https://cv.riddma.com" rel="noopener" target="_blank" class="secondary--text">cv.riddma.com</a>
    </div>
  </v-container>
</template>

<script>
import HomeCard from "@/components/HomeCard";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: { HomeCard },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      fitPhone: (state) => state.fitPhone,
    }),
  },
  methods: {},
  mounted() {},
  beforeDestroy() {},
};
</script>

<style scoped>
.homeBase {
  max-width: 1024px;
}
</style>
