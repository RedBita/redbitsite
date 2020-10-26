<template>
  <div class="ma-0 pa-0">
    <v-row class="text-center d-flex justify-center ma-0">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to RedBit</h1>

         <v-img
          src="https://www.hackthebox.eu/badge/team/image/3141"
          class="my-3"
          contain
          max-height="50"
        />

        <p class="subheading font-weight-regular">
          If you wanna hang out with us
          <br />please join our online
          <a href="https://discord.gg/YKQa2uW" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>
    </v-row>
    <v-row class="text-center d-flex justify-center ma-0">
      <h1>If you enjoyed the content here it is our gorgeous team</h1>
    </v-row>

    <v-row
      v-for="index in team_mates"
      :key="index"
      class="text-center d-flex justify-center ma-0 pb-2"
    >
      <v-img
        max-width="220px"
        :src="getImageHtbMate(index)"
      ></v-img>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    team_mates: ["371504", "265308", "121956", "61590", "26216", "100836", "240627"],
    //hallo: "<script src='https://www.hackthebox.eu/badge/team/3141'></scri" + "pt>"
  }),
  
  methods: {
    getImageHtbMate(mate) {
      return "http://www.hackthebox.eu/badge/image/" + mate
    },
  }

};
</script>