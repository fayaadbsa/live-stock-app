<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Stock App',
  meta: [
    { name: 'description', content: 'Stock app.' }
  ],
})
</script>
