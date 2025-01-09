<script setup>
import { ref } from 'vue'

defineProps({
  user: Object,
})

const count = ref(0)
</script>

<template>
  <h3 class="title">Welcome {{ user.name }}</h3>

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
