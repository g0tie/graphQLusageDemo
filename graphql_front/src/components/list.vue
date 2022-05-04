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
            let data = await fetch(url);

            if (data.status !== 200) return;

            data = data.data;

            switch (this.type) {
                case "locations":
                    this.list = data.locations.results
                break; 

                case "characters":
                    this.list = data.characters.results
                break;
            }

            console.log(this.list)
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