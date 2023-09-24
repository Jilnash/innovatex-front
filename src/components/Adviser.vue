<template>
  <div class="container col">
    <select name="category" id="category" v-model="categoryId">
      <option value="">Choose the category</option>
      <option v-for="c in categories" :value="c.id"> {{c.name}} </option>
    </select>
    <select name="urgent" id="urgent" v-model="isUrgent">
      <option value="false">Not urgent</option>
      <option value="true">Urgent</option>
    </select>
    <textarea rows="6"  placeholder="Type your suggestion" v-model="message"></textarea>
    <input type="submit" :onclick="submit" >
  </div>
</template>

<script>
export default {
  name: "Adviser",
  data: function () {
    return {
      categoryId: null,
      isUrgent: false,
      message: "",
      categories: []
    }
  },
  created() {
    let requestOptions = {
      method: 'GET'
    };

    fetch("http://localhost:8080/categories", requestOptions)
        .then(response => response.json())
        .then(result => this.categories = result)
  },
  methods: {
    submit() {

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "category": {
          "id": this.categoryId
        },
        "isUrgent": this.isUrgent,
        "message": this.message
      });

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
      };

      fetch("http://localhost:8080/suggestions", requestOptions)
    }
  }
}
</script>

<style scoped>
.container {
  align-items: center;
}

.container > * {
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
}

select {
  font-size: 15px;
}

input[type=submit] {
  background-color: #306EF7;
  color: white;
  border: none;
  font-size: 15px;
}

</style>