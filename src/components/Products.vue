<template>
  <div class="table">
    <table>
      <thead>
      <tr>
        <td>id</td>
        <td class="name">name</td>
        <td>price</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="p in products" :key="p.id">
        <td>{{ p.id }}</td>
        <td class="name">{{ p.name }}</td>
        <td>{{ p.price }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: [],
      bool: true
    }
  },
  created() {
  }
}
</script>

<style scoped>

.table {
  display: flex;
  align-items: center;
  justify-content: center;
}

td {
  margin: 5px 5px;
  padding: 5px 15px ;
  border: 1px black solid;
  border-radius: 5px;
}

.name {
  width: 170px;
}

</style>