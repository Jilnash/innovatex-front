<template>
<div class="container col">
  <div class="navbar col">
    <div class="col">
      <router-link to="adviser">Enviromental<br> Recomedations</router-link>
      <router-link to="suggestion">Place <br>adviser</router-link>
    </div>
    <div class="widgets"><b>Currency:</b> RUB {{ RUB.toFixed(2) }}, USD {{ USD.toFixed(2) }}, EUR {{ EUR.toFixed(2) }}</div>
  </div>
</div>
</template>

<script>

export default {
  name: "Main",
  data() {
    return {
      RUB: null,
      EUR: null,
      USD: null,
    }
  },
  created() {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://api.currencyapi.com/v3/latest?base_currency=EUR&currencies=KZT&apikey=cur_live_kTACYBSqXf7jCFgqFk1H4RKDj8jibaSLJC8v0zan", requestOptions)
        .then(response => response.json())
        .then(result => this.EUR = result.data.KZT.value)

    fetch("https://api.currencyapi.com/v3/latest?base_currency=USD&currencies=KZT&apikey=cur_live_kTACYBSqXf7jCFgqFk1H4RKDj8jibaSLJC8v0zan", requestOptions)
        .then(response => response.json())
        .then(result => this.USD = result.data.KZT.value)

    fetch("https://api.currencyapi.com/v3/latest?base_currency=RUB&currencies=KZT&apikey=cur_live_kTACYBSqXf7jCFgqFk1H4RKDj8jibaSLJC8v0zan", requestOptions)
        .then(response => response.json())
        .then(result => this.RUB = result.data.KZT.value)
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