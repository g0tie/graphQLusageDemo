<template>
    <Header/>
    <component :is="routedComponent" />
    <Footer />
</template>

<script>
import Home from './components/index.vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import List from './components/list.vue'
import NotFound from './components/notfound.vue'
import 'bootstrap/dist/css/bootstrap.min.css'


const routes = {
  '/': Home,
  '/locations/': List,
  '/characters/': List
}


export default {
  name: 'App',
  components: {
    Home,
    Header,
    List,
    Footer
  },
  data() {
    return { current: window.location.pathname };
  },
  computed: {
    routedComponent() {
      return routes[this.current] || NotFound;
    }
  }
}
</script>

<style>

</style>
