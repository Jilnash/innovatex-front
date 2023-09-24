<template>
<div class="container col">
  <input type="text" placeholder="Input keywords" v-model="keywords">
  <div>
    <select name="price" id="price" v-model="price">
      <option value="">Max price</option>
      <option value="1000">1000tg</option>
      <option value="2000">2000tg</option>
      <option value="5000">5000tg</option>
    </select>
    <select name="radius" id="radius" v-model="radius">
      <option value="">Max range</option>
      <option value="100">100m</option>
      <option value="250">250m</option>
      <option value="500">500m</option>
      <option value="1000">1000m</option>
      <option value="1500">1500m</option>
    </select>
  </div>
  <input type="submit" value="Suggest" :onclick="submit">
  <div v-if="list.length > 0" class="list">
    <template v-for="item in list">
      <div class="item">
        <router-link :to="'/map/' + item.geometry.location.lng + '/' + item.geometry.location.lat">{{ item.name }}</router-link>
        <p>Rating: {{item.rating}}</p>
        <p>Address: {{item.vicinity}}</p>
      </div>
    </template>
  </div>
  <p v-else>
    No suggesstions
  </p>
</div>
</template>

<script>
export default {
  name: "Suggestion",
  data() {
    return {
      radius: null,
      price: null,
      keywords: null,
      key: "AIzaSyBC7W-H8jvF7FCFbrEHG-grbUjRKFOcbxk",
      list: []
    }
  },
  methods: {
    submit: function () {
      let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(`http://localhost:8080/xxx?keywords=${this.keywords}&radius=${this.radius}`, requestOptions)
          .then(response => response.text())
          .then(res => this.list = JSON.parse(res).results)
    }
  }
}
</script>

<style scoped>

.container > * {
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
}

select {
  font-size: 15px;
  padding: 10px;
  border-radius: 10px;
}

input[type=submit] {
  background-color: #306EF7;
  color: white;
  border: none;
  font-size: 15px;
}

.list {
  overflow: scroll;
}

.item {
  margin: 10px 0;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}

</style>