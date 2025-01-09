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
