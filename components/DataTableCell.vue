<template>
  <span :class="['text-lg font-semibold px-2 py-1',
    highlight ? 'text-white bg-primary-600' : 'text-white transition-all ease-out duration-1000']">
    {{ props.value }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps(['value'])
const highlight = ref(false)

const timer = 3000

const addHighlight = () => {
  highlight.value = true
  setTimeout(clearHighlight, timer)
}

const clearHighlight = () => {
  highlight.value = false
}

watch(() => props.value, (newProps, oldProps) => {
  if (oldProps !== newProps) {
    addHighlight()
  }
})
</script>
