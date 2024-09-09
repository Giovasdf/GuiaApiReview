<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <br>
        <RouterLink to="/RandomUser">RandomUser</RouterLink>
        <br>
        <RouterLink to="/DolarFecha">DolarFecha</RouterLink>
        <br>
        <RouterLink to="/Clima">Clima</RouterLink>
        <br>       
        <RouterLink to="/PokeApi">PokeApi</RouterLink>
        <br>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
