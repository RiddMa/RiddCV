<template>
  <v-container id="cv" fluid class="ma-0 pa-0">
    <v-row no-gutters class="justify-center ma-0 pa-0">
      <v-col class="homeBase ma-0 pa-0">
        <CVCard :fit-phone="fitPhone" class="mx-auto my-6 pa-0"></CVCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CVCard from "@/components/CVCard";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: { CVCard },
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
