<template>
  <div class="container-fluid">
    <h1>{{ msg }}</h1>
  <card />
  </div>
</template>

<script>
import card from "./card.vue";

export default {
  name: 'HomeComponent',
  components: { card },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
