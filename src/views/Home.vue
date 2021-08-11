<template>
  <div class="home">
    <div><h1>All Destinations</h1></div>
    <div class="destinations">
      <div v-for="dest in $store.state.destinations" :key="dest.name">
        <router-link
          :to="{ name: 'DestinationDetails', params: { slug: dest.slug } }"
        >
          <h2>{{ dest.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{ name: 'DestinationDetails', params: { slug: dest.slug } }"
          >
            <img :src="require(`@/assets/${dest.image}`)" :alt="dest.name" />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
img {
  max-width: 200px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
</style>
