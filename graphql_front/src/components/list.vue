<template>
    <div class="container">
        <h1>{{ title }}/h1>
        <ul class="list-group">
            <li v-for="item in list" :key="item.id" class="list-group-item">
                <router-link to="/{{ type }}/{{ item.id }}"><img src={{ item.image }}/> <span>{{ item.name}}</span></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import App from '../App.vue'
export default {
  components: { App },
name:"ListComponent",
props: ['list', 'type', 'title']
}
</script>

<style>

</style>