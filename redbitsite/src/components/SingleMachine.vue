<template>
  <div class="d-flex" style="height:100%">
    <v-navigation-drawer permanent>
      <h1 class="d-flex justify-center">{{ machine_info.name }}</h1>
      <v-row class="d-flex justify-center" width="100px"
        ><v-img
          :src="machine_info.avatar_thumb"
          max-height="100"
          max-width="100"
        ></v-img
      ></v-row>
      <h3 class="d-flex justify-center">{{ machine_info.IP }}</h3>
      <v-row class="d-flex justify-center"
        ><h3 :class="getColor(machine_info.Difficulty)">
          Difficulty: {{ machine_info.rating }}
        </h3>
      </v-row>
      <v-row class="d-flex justify-center"
        ><h3>Released: {{ machine_info.release }}</h3>
      </v-row>
      <v-row class="d-flex justify-center"
        ><h3>Points: {{ machine_info.points }}</h3>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-avatar class="ma-3" size="30" tile>
          <v-img :src="getOSImage(machine_info.OS)"></v-img>
        </v-avatar>
      </v-row>

      <template v-slot:append>
        <div class="pa-2">
          <v-img
            max-width="300"
            src="https://www.hackthebox.eu/badge/image/371504"
          ></v-img>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main class="ma-0 pa-0">
      <iframe
        :src="filePath"
        width="100%"
        height="100%"
        style="border: none"
      ></iframe>
    </v-main>
  </div>
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
    this.filePath = this.$route.params.path;
    let name = this.filePath.slice(this.filePath.lastIndexOf("/") + 1);
    this.name = name.toLowerCase();
    var ind = array
      .map(function (e) {
        return e.name;
      })
      .indexOf(name);
    this.machine_info = array[ind];

    this.filePath =
      "https://redbita.github.io/data/" +
      this.filePath.toLowerCase() +
      "/" +
      this.name.toLowerCase() +
      ".pdf";

    console.log(this.filePath);
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