<template>
  <div class="d-flex" style="height: 100%">
    <v-navigation-drawer permanent>
      <h1 style="text-align: center">{{ writeup_info.name }}</h1>

      <template v-slot:append>
        <div class="pa-2">
          <v-img v-for="author in arrayOfWriteUps" :key="author.text" max-width="300" :src="getAuthor(author.author)"></v-img>
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
import axios from "../plugins/axios/axios_data";

export default {
  data: () => ({
    filePath: "",
    dirPath: "https://redbita.github.io/data/",
    apiEnd:
      "https://api.github.com/repos/redbita/redbita.github.io/contents/data/",
    path: "",
    name,
    machine_info: {},
    writeup_info: {},
    arrayOfWriteUps: [],
  }),

  mounted: function () {
    this.path = this.$route.params.path.toLowerCase();
    this.dirPath += this.path;
    this.apiEnd += this.path;

    console.log(this.path);

    let name = this.dirPath.slice(this.dirPath.lastIndexOf("/") + 1);
    this.name = name.toLowerCase();
    var ind = array
      .map(function (e) {
        return e.name;
      })
      .indexOf(name);

    if (ind >= 0) {
      this.machine_info = array[ind];
    } else {
      this.getFolderDetails();
      this.getWriteUpDetails();
    }    
  },

  methods: {
    getWriteUpDetails: async function () {
      const resp = await axios.get(this.dirPath + "/data.json");
      this.writeup_info = resp.data;
    },
    getFolderDetails: async function () {
      const resp = await axios.get(this.apiEnd);
      var arrayOfWriteUps = resp.data.filter(function (item) {
        return (
          (item.author = item.name.slice(
            item.name.indexOf("@") + 1,
            item.name.length - 4
          )),
          item.name.indexOf(".pdf") > 0
        );
      });
      this.filePath = this.dirPath.toLowerCase() + "/" + arrayOfWriteUps[0].name;      
      this.arrayOfWriteUps = arrayOfWriteUps;
    },
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
    getAuthor: function (id) {
      return "https://www.hackthebox.eu/badge/image/" + id ;
    },
  },
};
</script>