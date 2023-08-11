<template>
  <div>
    <header class="shadow-md bg-zinc-950 fixed top-0 w-full h-16">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="text-3xl font-bold">
          <span> 💶 </span>
          <span> Stock </span>
          <span class="text-primary-500"> App </span>
        </NuxtLink>
        <div class="flex gap-6" v-if="status === 'authenticated'">
          <button @click="signOut()">Sign Out</button>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">

const { status, signOut } = useAuth()

</script>
