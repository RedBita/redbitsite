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

    <v-row class="ma-0">
      <v-toolbar dark color="black">
        <v-text-field
          v-model="search"
          hide-no-data
          hide-details
          label="What challenge are you interested in?"
          solo-inverted
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-toolbar>
    </v-row>

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
    challenges: [
      { name: "Reply Cyber Security challenge 2020", path: "rcs2020" },
      { name: "Reply Cyber Security challenge 2019", path: "rcs2019" },
    ],
  }),

  mounted: async function() {
    this.challenges = await this.get_challenges_folder();scroll
  },

  methods: {
    open_challenge: function (a) {
      this.$router.push("/challenges/" + a);
      console.log(a);
    },

    async get_challenges_folder() {
      try {
        const resp = await this.axios.get(
          "https://api.github.com/repos/RedBita/redbita.github.io/contents/data/challenges"
        );
        console.log(resp.data)
        return resp.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
