<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <ul class="list-group">
            <li v-for="item in list" :key="item.id" class="list-group-item">
                <router-link to="/{{ type }}/{{ item.id }}"><img src={{ item.image }}/> <span>{{item.name}}</span></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"ListComponent",
    data : function () {
        return {
            list: "",
            title: "",
            type: "",
            baseurl: "localhost:3000"
        }
    },
    methods: {
        setTitle: function () {
            if (this.type !== "location") {
                this.title = "Characters"
            } else {
                this.title = "Locations"
            }
        },
        getList : function() {
            switch (this.type) {
                case "locations":
                    this.getData(this.baseurl + "/locations")
                break; 

                case "characters":
                    this.getData(this.baseurl + "/characters")
                break;
            }
        },
        getData: async function (url) {
            this.list = await fetch(url);
        },
        
        created() {
            this.type = this.$router.currentRoute.path.replace("/", "");
        }
    }
}
</script>

<style>

</style>