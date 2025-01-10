<script setup>
import { Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import UserDisplay from '../components/UserDisplay.vue'

const page = usePage()

const user = computed(() => page.props.user)
</script>

<template>
  <h1 class="text-4xl text-orange-400 font-black mb-8">Vue Inertia App</h1>

  <UserDisplay :user="user" />
<div class=" flex flex-col items-center gap-4 bg-violet-500 text-pink-500"></div>
  <div class="link-wrapper">
    <a href="/"> Django Home Page </a>
    <Link href="/other" prefetch>Vue Other Page</Link>
    <a href="/about"> Django About Page </a>
  </div>
</template>
