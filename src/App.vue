<template>
  <v-app>
    <v-app-bar app dark>
      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />

      <v-spacer></v-spacer>

      <v-btn
        :ripple="false"
        to="/"
        text
        x-large
        class="appbarButton"
        active-class="green"
      >
        home
      </v-btn>

      <v-btn
        v-for="destination in $store.state.destinations"
        :to="{ name: 'DestinationDetails', params: { slug: destination.slug } }"
        :key="destination.id"
        :ripple="false"
        text
        x-large
        class="appbarButton"
        active-class="green"
      >
        {{ destination.name }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view :key="$route.path" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.appbarButton:hover {
  color: #fff200;
}
</style>
