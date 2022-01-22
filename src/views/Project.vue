<template>
  <v-container id="cv" fluid class="ma-0 pa-0">
    <v-row no-gutters class="justify-center ma-0 pa-0">
      <v-col class="homeBase ma-0 pa-0">
        <v-hover class="mx-auto my-6 pa-0">
          <template v-slot:default="{ hover }">
            <v-card class="cardBase transition-swing" :elevation="hover ? 12 : 6" outlined>
              <v-row no-gutters class="justify-center mx-auto my-6">
                <v-col class="text-center">
                  <span>页面建设中……</span>
                </v-col>
              </v-row>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Project",
};
</script>

<style scoped src="../styles/cardBase.css"></style>
<style scoped></style>
