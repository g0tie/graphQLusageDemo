<template>
    <div class="container-fluid">

        <div class="row">
            <h1>{{ title }}</h1>
        </div>

        <div class="row">
            <div class="col-10">
                <div class="spinner-border" role="status" v-if="loading">
                    <span class="sr-only"></span>
                </div>
                <ul class="list-group">
                    <li v-for="item in list" :key="item.id" class="list-group-item">
                        <a><img v-bind:src="item.image"/> <span>{{item.name}}</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ListComponent",
    data : function () {
        return {
            list: [],
            loading:false,
            title: "",
            type: "",
            baseurl: "http://localhost:3000/"
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
        getData: async function (url) {
            this.loading = true;
            let data = await fetch(url, {mode: 'cors'});

            if (await data.status !== 200) return;

            data = await data.json()

            data = await data.data

            switch (this.type) {
                case "locations":
                    this.list = await data.data.locations.results
                break; 

                case "characters":
                    this.list = await data.data.characters.results
                break;
            }

            this.loading = false;
        },
        
    },
    created() {
        this.type = window.location.pathname.replaceAll("/", '');
        this.setTitle();
        this.getData(this.baseurl + this.type);
    }
}
</script>

<style>

</style>