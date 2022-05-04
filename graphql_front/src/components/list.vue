<template>
    <div class="container">
        <h1>{{ title }}</h1>

        <div class="row">
            <ul class="list-group">
                <li v-for="item in list" :key="item.id" class="list-group-item">
                    <a><img v-bind:src="item.image"/> <span>{{item.name}}</span></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"ListComponent",
    data : function () {
        return {
            list: [],
            title: "",
            type: "",
            baseurl: "localhost:3000"
        }
    },
    methods: {
        setTitle: function () {
            console.log(this.type)
            if (this.type !== "locations") {
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
        
    },
    created() {
        this.type = window.location.pathname.replaceAll("/", '');
        this.setTitle();
        this.getList();
    }
}
</script>

<style>

</style>