<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn exact v-for="page in pages" :key="page.name" :to="{ name: page.name }" text >{{
          page.name
        }}</v-btn>
      </div>

       <div v-if="$vuetify.breakpoint.smAndDown" class="d-flex align-center">
        <v-btn text @click="drawer = true"><v-icon>mdi-menu</v-icon></v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/RedBita"
        
        text
      >
        <span v-if="$vuetify.breakpoint.mdAndUp" class="mr-2">github repo</span>
        <v-icon v-if="$vuetify.breakpoint.mdAndUp">mdi-open-in-new</v-icon>
        <v-icon v-if="$vuetify.breakpoint.smAndDown">mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
         v-for="page in pages" :key="page.name" 
        >
          <v-list-item exact :to="{ name: page.name }">
            <v-list-item-title>{{page.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="secondary">
      <router-view class="ma-0"></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({
    drawer: false,
    home: [{name:"home", path:"/"}],
    pages: [],
  }),

  mounted: function () {
    console.log(this.$vuetify.breakpoint.xsOnly)
    this.axios
      .get("https://api.github.com/repos/Redbita/redbita.github.io/contents/data")
      .then((response) => {
        //console.log(response.data);
        const result = response.data.filter(
          (path) => path.name.indexOf(".html") < 0
        );
        this.pages = this.home.concat(result);
        console.log(this.pages)
      });
  },
};
</script>
