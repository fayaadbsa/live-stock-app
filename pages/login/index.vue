<template>
  <div class="flex flex-col items-center">
    <h1 class="font-bold text-4xl">Welcome! 👋👋</h1>
    <p class="text-lg text-zinc-400 mt-4">Sign in to your account</p>
    <div class="mt-12">
      <button @click="signIn('google')"
        class="px-4 py-2 border flex gap-2 bg-white border-slate-200 rounded-md text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
        <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo">
        <span>Login with Google</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

const { signIn } = useAuth()

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})

</script>