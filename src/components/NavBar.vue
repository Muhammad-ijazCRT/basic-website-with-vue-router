<template>
    <div class="NavBar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="#">Features</a> -->
          <router-link class="nav-link" aria-current="page" to="/about">About Us</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="#">Pricing</a> -->
          <router-link class="nav-link" aria-current="page" to="/contact">Contact Us</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
          <router-link class="nav-link" aria-current="page" to="/product">Store Products</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>

</template>

<script>
    export default {
        name:'NaBar',

    }
</script>

<style lang="sass" scoped>

</style>