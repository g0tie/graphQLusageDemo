<template>
  <header class="bg-warning d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Rick & Morty</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/characters" class="nav-link">Characters</a></li>
        <li class="nav-item"><a href="/locations"  class="nav-link">Locations</a></li>
        <li class="nav-item"><a href="/about"  class="nav-link">About</a></li>
      </ul>
    </header>
</template>

<script>
export default {
     name: "HeaderComponent"

}
</script>

<style>
</style>