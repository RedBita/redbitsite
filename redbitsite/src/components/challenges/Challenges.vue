<template>
  <div class="ma-5">
    <!--
  <v-row class="text-center d-flex justify-center ma-0">
    <v-col cols="12">
      <v-img
        :src="require('../assets/logo.svg')"
        class="my-3"
        contain
        height="200"
      />
    </v-col>
  </v-row>
  -->

    <v-row>
      <v-col class="mx-4">
        <v-card
          elevation="2"
          class="my-3"
          shaped
          v-for="challenge in challenges"
          :key="challenge.name"
          @click="open_challenge(challenge.path)"
        >
          <v-row>
            <v-card-title class="margin ml-5">{{
              challenge.name
            }}</v-card-title>
            <v-spacer></v-spacer>
            <v-btn text class="ma-5"><v-icon>mdi-arrow-right</v-icon></v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    search: "",
    path: "",
    challenges: [],
  }),

  watch: {
    $route: async function () {
      if (this.$route.params.path != undefined) {
        this.path = this.$route.params.path + "/";
      } else {
        this.path = "";
      }
      this.challenges = [];
      this.challenges = await this.get_challenges_folder();
    },
  },

  mounted: async function () {
    this.challenges = await this.get_challenges_folder();
  },

  methods: {
    open_challenge: function (a) {
      this.$router.push("/challenges/" + this.path + a);
    },

    async get_challenges_folder() {
      try {
        const resp = await this.axios.get(
          "https://api.github.com/repos/RedBita/redbita.github.io/contents/data2/challenges/" +
            this.path
        );

        var thereAreSomePdf = false;
        //make some refactor
        resp.data.forEach((element) => {
          element["path"] = element.name;
          element["name"] = element.name.replaceAll("_", " ");

          if (element["name"].indexOf(".pdf") > 0) {
            thereAreSomePdf = true;
          }
        });

        if (thereAreSomePdf) {          
          this.$router.push("/write/challenges/" + this.$route.params.path);          
        }

        return resp.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
