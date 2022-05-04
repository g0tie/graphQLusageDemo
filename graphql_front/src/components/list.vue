<template>
    <div class="container-fluid">

        <div class="row">
            <h1>{{ title }}</h1>
        </div>

        <div class="row">
            <div class="col-lg-8">
                <div class="spinner-border" role="status" v-if="loading">
                    <span class="sr-only"></span>
                </div>
                <ul class="list-group">
                    <li v-for="item in list" :key="item.id" class="list-group-item">
                        <a @click="loadModal(item.id)"><img v-bind:src="item.image"/> <span>{{item.name}}</span></a>
                    </li>
                </ul>
            </div>

            <div class="col-lg-4">
                <div class="card">
                    <img class="card-img-top" v-bind:src="modalImg" :alt="altTxt" style="max-height:350px;object-fit:cover;">
                    
                    <div class="card-body">

                        <div class="spinner-border" role="status" v-if="cardLoading">
                            <span class="sr-only"></span>
                        </div>
                        <h5 class="card-title">{{modalTitle}}</h5>
                        <div v-html="modalDesc"></div>
                    </div>
                </div>
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
            cardLoading:false,
            modalDisplay:"none",
            title: "Title",
            type: "",
            modalTitle:"",
            modalDesc:"Description",
            modalImg:"",
            altTxt:"No pictures",
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
        loadModal: async function (id) {
            this.cardLoading = true;

            let data = await fetch(this.baseurl + this.type + '/' + id, {mode: 'cors'});
            if (await data.status !== 200) return;

            data = await data.json();

             switch (this.type) {
                case "locations":
                    data  = data.data.data.location;
                    this.modalTitle = data.name
                    this.modalDesc = `<span>type: ${data.type}</span></br><span>dimension:${data.dimension}</span>`

                break; 

                case "characters":
                    data = data.data.data.character
                    this.modalTitle = data.name
                    this.modalDesc = `<span>status: ${data.status}</span></br><span>gender:${data.gender}</span></br><span>species:${data.species}</span>`
                    this.modalImg = data.image
                break;
            }

            this.cardLoading = false;

        }
        
    },
    created() {
        this.type = window.location.pathname.replaceAll("/", '');
        this.setTitle();
        this.getData(this.baseurl + this.type);
    }
}
</script>

<style scoped>
li {
    cursor: pointer;
}
</style>