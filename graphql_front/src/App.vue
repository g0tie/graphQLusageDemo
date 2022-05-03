<template>
  <Header/>
  <Home msg="Rick & Morty API"/>
  <Footer />
</template>

<script>
import Home from './components/index.vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

// const routes = [
//   {path: "/locations", component:}
// ]

export default {
  name: 'App',
  components: {
    Home,
    Header,
    Footer
  }
}
</script>

<style>

</style>
