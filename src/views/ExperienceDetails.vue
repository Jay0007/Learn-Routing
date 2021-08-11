<template>
  <div>
    <h1>
      {{ experience.name }}
    </h1>
    <img :src="require(`../assets/${experience.image}`)" alt="" />
    <h4>
      {{ experience.description }}
    </h4>
    <h2>
      {{ experience.description }}
    </h2>
    <h4>
      {{ experience.description }}
    </h4>
    <h1>
      {{ experience.description }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "ExperienceDetails",
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceslug: {
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
    experience() {
      return this.destination.experiences.find((item) => {
        return this.experienceslug === item.slug;
      });
    },
  },
};
</script>
