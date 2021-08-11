<template>
  <div>
    <h1>
      {{ destination.name }}
    </h1>
    <h4>
      {{ destination.description }}
    </h4>
    <img :src="require(`../assets/${destination.image}`)" alt="" />
    <section align="center" id="experience">
      <h1>Experiences in {{ destination.name }}</h1>
      <v-row justify="space-around">
        <v-col
          cols="2"
          sm="2"
          v-for="exp in destination.experiences"
          :key="exp.name"
        >
          <router-link
            :to="{
              name: 'ExperienceDetails',
              params: { experienceslug: exp.slug },
              hash: '#experience',
            }"
          >
            <v-img :src="require(`../assets/${exp.image}`)" :alt="exp.name">
              <h2>{{ exp.name }}</h2>
            </v-img>
          </router-link>
        </v-col>
      </v-row>
      <router-view :key="$route.path"></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: "DestinationDetails",
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    destination() {
      return this.$store.state.destinations.find((item) => {
        return item.slug === this.slug;
      });
    },
  },
};
</script>
