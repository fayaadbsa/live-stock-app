<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Live Stock App',
  meta: [
    { name: 'description', content: 'Live Stock app.' }
  ],
})
</script>
