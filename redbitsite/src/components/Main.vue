<template>
    <v-row class="text-center d-flex justify-center ma-0">
      <v-col cols="12">
        <v-img
          :src="require('../assets/redbit.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to RedBit</h1>

        <p class="subheading font-weight-regular">
          If you wanna hang out with us
          <br />please join our online
          <a href="https://discord.gg/YKQa2uW" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>
    </v-row>
</template>


<script>

export default {
  name: "HelloWorld",

  data: () => ({}),

};
</script>
