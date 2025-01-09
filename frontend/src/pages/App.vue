<script setup>
import UserDisplay from '../components/UserDisplay.vue'
import { computed } from 'vue'
import { usePage, Link } from '@inertiajs/vue3'

const page = usePage()
const user = computed(() => page.props.user)

</script>

<template>
  
  <h1>Vue Inertia App</h1>
  <UserDisplay :user="user" />

  <div class="link-wrapper">
    <a href="/" prefetch> Django Home Page </a>
    <Link href="/other" prefetch>Vue Other Page </Link>
    <a href="/about"> Django About Page </a>
  </div>
 
</template>

<style scoped>

h1 {
  color: tomato;
  align-items: center;
}


.link-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;
}
</style>
