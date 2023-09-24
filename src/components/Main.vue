<template>
<div class="container col">
  <div class="navbar col">
    <div class="col">
      <router-link to="adviser">Enviromental<br> Recomedations</router-link>
      <router-link to="suggestion">Place <br>adviser</router-link>
    </div>
    <div class="widgets">Widgets</div>
  </div>
</div>
</template>

<script>

export default {
  name: "Main",
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

a {
  background-color: red;
  color: white;
  margin-top: 20px;
  padding: 10px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  font-size: 30px;
}

.widgets {
  margin-top: 420px;
}

</style>