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
                        <a @click="loadModal(item.id)"><img v-bind:src="item.image"/> <span>{{item.name}}</span></a>
                    </li>
                </ul>
            </div>
        </div>


        <div class="modal" tabindex="-1" role="dialog" v-if="open">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{modalTitle}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>{{ modalDesc }}</p>
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
            open:false,
            title: "",
            type: "",
            modalTitle:"",
            modalDesc:"",
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
            this.open = true;

            let data = await fetch(this.baseurl + this.type + '/' + id, {mode: 'cors'});

            if (await data.status !== 200) return;

            data = await data.json();


             switch (this.type) {
                case "locations":
                    data  = data.data.location;
                    this.modalTitle = await data.name
                    this.modalDesc = `<span>type: ${data.type}</span><</br><span>dimension:${data.dimension}</span>`

                break; 

                case "characters":
                    data = data.data.character
                    this.modalTitle = await data.name
                    this.modalDesc = `<span>status: ${data.status}</span><</br><span>gender:${data.gender}</span></br><span>species:${data.species}</span>`
                break;
            }

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