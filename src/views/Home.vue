<template>
  <v-container v-if="fitPhone" id="aboutBase" fluid class="mx-0 mt-2 mb-8 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col class="homeBase ma-0 pa-0">
        <HomeCard :fit-phone="true"></HomeCard>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else id="aboutBase" fluid>
    <v-row>
      <v-col class="homeBase ma-auto">
        <HomeCard :fit-phone="false"></HomeCard>
      </v-col>
    </v-row>
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
