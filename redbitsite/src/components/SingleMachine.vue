<template>
  <v-row class="fill-height pa-0 ma-0">
    <!--Column for data and other things-->
    <v-col
      v-if="!$vuetify.breakpoint.smAndDown"
      class="fill-height pa-0 ma-0 align-stretch"
      col="12"
      md="3"
      sm="0"
    >
      <h1 class="d-flex justify-center">{{ name }}</h1>
      <v-row class="d-flex justify-center" width="100px"
        ><v-img :src="machine_info.img" max-height="100" max-width="100"></v-img
      ></v-row>
      <h3 class="d-flex justify-center">{{ machine_info.IP }}</h3>
      <v-row class="d-flex justify-center"
        ><h3 :class="getColor(machine_info.Difficulty)">
          {{ machine_info.Difficulty }}
        </h3>
      </v-row>
      <v-row class="d-flex justify-center"
        ><h3>Released: {{ machine_info.Release }}</h3>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-avatar class="ma-3" size="30" tile>
          <v-img :src="getOSImage(machine_info.OS)"></v-img>
        </v-avatar>
      </v-row>

      <v-row class="d-flex justify-center align-end align-stretch align-bottom">
        <v-img
          max-width="300"
          src="https://www.hackthebox.eu/badge/image/371504"
        ></v-img>
      </v-row>
    </v-col>
    <!--Column for PDF visualization-->
    <v-col col="12" md="9" sm="12" xs="12" class="pa-0 ma-0">
      <iframe
        :src="filePath"
        width="100%"
        height="100%"
        style="border: none"
      ></iframe>
    </v-col>
  </v-row>
</template>

<script>
import array from "../assets/machines_data.json";

export default {
  data: () => ({
    filePath: "",
    name,
    machine_info: {},
  }),

  mounted: function () {
    var ind = array
      .map(function (e) {
        return e.name;
      })
      .indexOf(this.$route.params.name);
    this.machine_info = array[ind];

    this.name = this.$route.params.name;
    this.filePath =
      "https://redbita.github.io/data/machines/" +
      this.name.toLowerCase() +
      ".pdf";
    console.log(this.file);
  },

  methods: {
    getOSImage: function (a) {
      if (a === "Linux") {
        return "https://www.hackthebox.eu/images/linux.png";
      } else if (a === "Windows") {
        return "https://www.hackthebox.eu/images/win.png";
      } else {
        return "https://www.flaticon.com/svg/static/icons/svg/1661/1661995.svg";
      }
    },
    getColor: function (a) {
      console.log(a);
      if (a == "Easy") {
        return "green--text";
      } else if (a == "Medium") {
        return "yellow--text";
      } else if (a == "Hard") {
        return "orange--text";
      } else {
        return "red--text";
      }
    },
  },
};
</script>