<template>
  <div class="row">
      <div class="col-6">
      <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Characters</h4>
          </div>
        <img class="card-img-top" style="max-height:300px;object-fit:cover" src="../../public/assets/img/rickd.jpg" />
          <div class="card-body">
            <router-link to="/characters/" class="w-100 btn btn-lg btn-outline-primary">See the list !</router-link>
          </div>
        </div>
        </div>

        <div class="col-6">
      <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Locations</h4>
          </div>
            <img class="card-img-top" style="max-height:300px;object-fit:cover" src="../../public/assets/img/rickmortyplanet.jpg" />
          <div class="card-body">
            <router-link to="/locations/" class="w-100 btn btn-lg btn-outline-primary">See the list !</router-link>
          </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {
name:"CardComponent"
}
</script>

<style>

</style>