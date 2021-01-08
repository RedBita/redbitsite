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

    <v-row class="d-flex justify-center">
      <h1>Active machines</h1>
    </v-row>

    <v-row class="d-flex justify-center">
      <div class="banner" style="color:black">
        <p>For the active machine you'll need the root hash:</p>
        <p>Linux root => <span style="color:white">$6$YIFGN9YscCV72BjFtx/tehbc7sQTJp09c5</span>:18277:0:99999:7:::</p>
        <p>Windows => :admin::xxxxxx:xxxxxxx:<span style="color:white">xxxxxxx</span></p>                
      </div>
    </v-row>

    <v-row v-if="!loaded" class="px-2 py-2 ma-0">

      <v-col 
        cols="12"
        sm="12"
        md="3"
        v-for="index in 4"
        :key="index"
      >
         <v-skeleton-loader
          height="38%"
          v-bind="attrs"
          type="card-avatar, article, actions"
        ></v-skeleton-loader>
      </v-col>

    </v-row>

    <v-row v-else class="px-2 py-2 ma-0">
      <v-col
        cols="12"
        sm="12"
        md="3"
        v-for="machine in active_machines"
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
                  <v-img :src="machine.avatar_thumb"></v-img>
                </v-avatar>
                <h3 class="d-flex justify-center">{{ machine.points }}</h3>
                <p class="d-flex justify-center">points</p>
              </div>

              <div>
                <v-card-title class="headline">{{ machine.name }}</v-card-title>

                <v-card-subtitle :class="getColor(machine.points)">{{
                  getDifficulty(machine.points)
                }}</v-card-subtitle>

                <v-card-subtitle>IP: {{ machine.ip }}</v-card-subtitle>
              </div>

              <v-spacer></v-spacer>
              <div>
                <v-avatar class="ma-3" size="30" tile>
                  <v-img :src="getOSImage(machine.os)"></v-img>
                </v-avatar>
              </div>
            </div>
          </v-card>
        </v-hover>
        <v-card v-else>
          <div class="d-flex to-do">
            <div>
              <v-avatar class="ma-3" size="70" tile>
                <v-img :src="machine.avatar_thumb"></v-img>
              </v-avatar>
              <h3 class="d-flex justify-center">{{ machine.points }}</h3>
              <p class="d-flex justify-center">points</p>
            </div>

            <div>
              <v-card-title class="headline">{{ machine.name }}</v-card-title>

              <v-card-subtitle :class="getColor(machine.points)">{{
               getDifficulty(machine.points)
              }}</v-card-subtitle>

              <v-card-subtitle>IP: {{ machine.ip }}</v-card-subtitle>
            </div>

            <v-spacer></v-spacer>
            <div>
              <v-avatar class="ma-3" size="30" tile>
                <v-img :src="getOSImage(machine.os)"></v-img>
              </v-avatar>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- RETIRED MACHINES -->

    <v-row class="d-flex justify-center">
      <h1>Retired machines</h1>
    </v-row>

    <!-- loaders -->

    <v-row v-if="!loaded" class="px-2 py-2 ma-0">

       <v-col 
        cols="12"
        sm="12"
        md="3"
        v-for="index in 4"
        :key="index"
      >
          <v-skeleton-loader
          height="38%"
          v-bind="attrs"
          type="card-avatar, article, actions"
        ></v-skeleton-loader>
      </v-col>

    </v-row>

    <v-row v-else class="px-2 py-2 ma-0">
      <v-col 
        cols="12"
        sm="12"
        md="3"
        v-for="machine in retired_machines"
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
                  <v-img :src="machine.avatar_thumb"></v-img>
                </v-avatar>
                <h3 class="d-flex justify-center">{{ machine.points }}</h3>
                <p class="d-flex justify-center">points</p>
              </div>

              <div>
                <v-card-title class="headline">{{ machine.name }}</v-card-title>

                <v-card-subtitle :class="getColor(machine.points)">{{
                 getDifficulty(machine.points)
                }}</v-card-subtitle>

                <v-card-subtitle>IP: {{ machine.ip }}</v-card-subtitle>
              </div>

              <v-spacer></v-spacer>
              <div>
                <v-avatar class="ma-3" size="30" tile>
                  <v-img :src="getOSImage(machine.os)"></v-img>
                </v-avatar>
              </div>
            </div>
          </v-card>
        </v-hover>
        <v-card v-else>
          <div class="d-flex to-do">
            <div>
              <v-avatar class="ma-3" size="70" tile>
                <v-img :src="machine.avatar_thumb"></v-img>
              </v-avatar>
              <h3 class="d-flex justify-center">{{ machine.points }}</h3>
              <p class="d-flex justify-center">points</p>
            </div>

            <div>
              <v-card-title class="headline">{{ machine.name }}</v-card-title>

              <v-card-subtitle :class="getColor(machine.points)">{{
               getDifficulty(machine.points)
              }}</v-card-subtitle>

              <v-card-subtitle>IP: {{ machine.ip }}</v-card-subtitle>
            </div>

            <v-spacer></v-spacer>
            <div>
              <v-avatar class="ma-3" size="30" tile>
                <v-img :src="getOSImage(machine.os)"></v-img>
              </v-avatar>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import machines from "../assets/machines_data";

export default {
  name: "HelloWorld",

  data: () => ({
    retired_machines:[],
    retired_machines_all:[],
    active_machines:[],
    active_machines_all:[],
    search: "",
    loaded: false,
    attrs: false
  }),

  mounted: async function () {
    var machines_writeup = await this.get_machines_writeup();
    var owned_machines_name = [];
  machines_writeup.forEach((element) => {
      owned_machines_name.push(element.name.split(".")[0].toLowerCase());
    });

    //add the flag done in order to know which one we have the writeup
    machines.forEach((element) => {
      element["done"] = owned_machines_name.includes(
        element.name.toLowerCase()
      );

      if(element["retired"]){
        this.retired_machines.push(element)
      }else{
        this.active_machines.push(element)
      }

      this.loaded = true

    });

    this.active_machines.sort(function (a, b) {
      var mid = a.done === b.done ? 0 : a.done ? -1 : 1;
      return parseInt(a.points) - parseInt(b.points) + mid;
    });

    this.active_machines_all = this.active_machines;

    this.retired_machines.sort(function (a, b) {
      var mid = a.done === b.done ? 0 : a.done ? -1 : 1;
      return parseInt(a.points) - parseInt(b.points) + mid;
    });

    this.retired_machines_all = this.retired_machines;

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
    getColor: function (points) {
      if (points == 20){
        return "green--text";
      } else if (points == 30) {
        return "yellow--text";
      } else if (points == 40) {
        return "orange--text";
      } else {
        return "red--text";
      }
    },
    getDifficulty: function (points) {
      if (points == 20){
        return "EASY";
      } else if (points == 30) {
        return "MEDIUM";
      } else if (points == 40) {
        return "HARD";
      } else {
        return "INSANE";
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
        this.$router.push("/write/machines/" + a);
      }
    },
    update_list: function () {
      var search_value = this.search;
      this.active_machines = this.active_machines_all.filter(function (item) {
        if (item.name.toLowerCase().includes(search_value.toLowerCase())) {
          return item;
        }
      });
      this.retired_machines = this.retired_machines_all.filter(function (item) {
        if (item.name.toLowerCase().includes(search_value.toLowerCase())) {
          return item;
        }
      });
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

.banner{
  padding:10px;
  margin: 20px;
  width: 95%;
  height: 10%;
  text-align: center;
  background-color: red;
  border-radius: 5px;
}
</style>