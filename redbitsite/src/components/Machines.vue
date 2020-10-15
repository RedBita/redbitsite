<template>
  <div class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-toolbar class="mt-4" dark color="black">
        <v-toolbar-title v-if="!$vuetify.breakpoint.smAndDown">Search for machines</v-toolbar-title>
        <v-text-field
          v-model="search"
          class="mx-2"
          hide-no-data
          hide-details
          label="What are you stuck on?"
          solo-inverted
          @change="update_list"
          @keyup="delayed_update"
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-toolbar>
    </v-row>
    <v-row class="px-2 py-2 ma-0">
      <v-col
        cols="12"
        sm="12"
        md="3"
        v-for="machine in machines_to_show"
        :key="machine.name"
      >
        <v-hover v-if="machine.done" v-slot:default="{ hover }">
          <v-card
            :class="{ 'on-hover': hover }"
            @click="open_machine(machine.name)"
          >
            <div class="d-flex">
              <div>
                <v-avatar class="ma-3" size="70" tile>
                  <v-img :src="machine.img"></v-img>
                </v-avatar>
                <h3 class="d-flex justify-center">{{ machine.Points }}</h3>
                <p class="d-flex justify-center">points</p>
              </div>

              <div>
                <v-card-title class="headline">{{ machine.name }}</v-card-title>

                <v-card-subtitle :class="getColor(machine.Difficulty)">{{
                  machine.Difficulty
                }}</v-card-subtitle>

                <v-card-subtitle>IP: {{ machine.IP }}</v-card-subtitle>
              </div>

              <v-spacer></v-spacer>
              <div>
                <v-avatar class="ma-3" size="30" tile>
                  <v-img :src="getOSImage(machine.OS)"></v-img>
                </v-avatar>
              </div>
            </div>
          </v-card>
        </v-hover>
        <v-card v-else>
          <div class="d-flex to-do">
            <div>
              <v-avatar class="ma-3" size="70" tile>
                <v-img :src="machine.img"></v-img>
              </v-avatar>
              <h3 class="d-flex justify-center">{{ machine.Points }}</h3>
              <p class="d-flex justify-center">points</p>
            </div>

            <div>
              <v-card-title class="headline">{{ machine.name }}</v-card-title>

              <v-card-subtitle :class="getColor(machine.Difficulty)">{{
                machine.Difficulty
              }}</v-card-subtitle>

              <v-card-subtitle>IP: {{ machine.IP }}</v-card-subtitle>
            </div>

            <v-spacer></v-spacer>
            <div>
              <v-avatar class="ma-3" size="30" tile>
                <v-img :src="getOSImage(machine.OS)"></v-img>
              </v-avatar>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import array from "../assets/machines_data";

export default {
  name: "HelloWorld",

  data: () => ({
    machines: [],
    machines_to_show: [],
    search: "",
  }),

  mounted: async function () {
    var machines_writeup = await this.get_machines_writeup();

    var owned_machines_name = [];

    machines_writeup.forEach((element) => {
      owned_machines_name.push(element.name.split(".")[0].toLowerCase());
    });

    console.log(owned_machines_name, array);

    array.forEach((element) => {
      element["done"] = owned_machines_name.includes(
        element.name.toLowerCase()
      );
      console.log(element);
    });

    var new_array = array.sort(function (a, b) {
      var mid = a.done === b.done ? 0 : a.done ? -1 : 1;

      return parseInt(a.Points) - parseInt(b.Points) + mid;
    });

    this.machines = new_array;
    this.machines_to_show = new_array;
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
    async get_machines_writeup() {
      try {
        const resp = await this.axios.get(
          "https://api.github.com/repos/RedBita/redbita.github.io/contents/data/machines"
        );
        return resp.data;
      } catch (err) {
        console.error(err);
      }
    },
    open_machine: function (a) {
      if (this.$vuetify.breakpoint.mdAndDown) {
        window.open("https://redbita.github.io/data/machines/" + a.toLowerCase() + ".pdf");
      } else {
        this.$router.push("/machines/" + a);
        console.log(a);
      }
    },
    update_list: function () {
      var search_value = this.search;
      var filteredArray = this.machines.filter(function (item) {
        console.log(item);
        if (item.name.toLowerCase().includes(search_value.toLowerCase())) {
          return item;
        }
      });
      this.machines_to_show = filteredArray;
    },
    delayed_update: function () {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.update_list();
      }, 150);
    },
  },
};
</script>

<style scoped>
.v-card {
  transition: all 0.3s ease-in-out;
}

.to-do {
  opacity: 0.4;
}

.v-card:not(.on-hover) {
  transform: scale(0.98);
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>