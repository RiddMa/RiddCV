<template>
  <v-container id="cv" fluid class="ma-0 pa-0">
    <v-row no-gutters class="justify-center ma-0 pa-0">
      <v-col class="homeBase ma-0 pa-0">
        <CVCard4Print :fit-phone="fitPhone" :page="1"></CVCard4Print>
      </v-col>
    </v-row>
    <div class="text-center" style="page-break-after: always; width: 100%">下续</div>
    <br />
    <v-row no-gutters class="justify-center ma-0 pa-0">
      <v-col class="homeBase ma-0 pa-0">
        <CVCard4Print :fit-phone="fitPhone" :page="2"></CVCard4Print>
      </v-col>
    </v-row>
    <div class="text-center" style="width: 100%">
      <span>此文档网页版见 </span>
      <a href="https://cv.riddma.com" rel="noopener" target="_blank" class="secondary--text">cv.riddma.com</a>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import CVCard4Print from "@/components/CVCard4Print";
export default {
  name: "CVPrint",
  components: { CVCard4Print },
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

<style scoped></style>
