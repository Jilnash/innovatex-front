<script>
import Main from "./components/Main.vue";
import Adviser from "./components/Adviser.vue";
import Suggestion from "./components/Suggestion.vue";
import Map from "./components/Map.vue";

export default {
  components: {
    Suggestion, Adviser, Main, Map
  },
  data() {
    return {
    }
  },
  created() {
  }
}
</script>

<template>
  <router-view></router-view>
<!--  <Main></Main>-->
</template>

<style scoped>


@media (min-width: 1024px) {

}
</style>
