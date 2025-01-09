<script setup>
import { Link } from '@inertiajs/vue3'

</script>

<template>
  
  <h1>Other Vue Page</h1>
  
  <div class="link-wrapper">
    <a href="/" prefetch> Django Home Page </a>
    <Link class="link" href="/app" prefetch>Vue App Page </Link>
    <a href="/about" prefetch>Django About Page </a>
  </div>
 
</template>

<style scoped>

h1 {
  color: tomato;
}

.link-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;
}
</style>
