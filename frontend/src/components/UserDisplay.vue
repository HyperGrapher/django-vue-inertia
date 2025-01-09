<script setup>
import { ref } from 'vue'

defineProps({
  user: {
    type: Object,
    default: () => ({ name: '', id: '', email: '' }),
  },
})

const count = ref(0)
</script>

<template>
  <h3 class="text-2xl font-bold text-blue-500">Welcome {{ user.name }}</h3>

  <div class="mt-2">
    <p>Id: {{ user.id }}</p>
    <p>Email: {{ user.email }}</p>
  </div>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.title {
  color: darkorange;
}
</style>
