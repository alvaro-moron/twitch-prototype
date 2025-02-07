<script setup lang="ts">
defineProps({
  buttonText: String,
  backgroundColor: String,
})
</script>
<template>
  <button
    :style="{ backgroundColor: backgroundColor || 'var(--c-background-button)' }"
    class="mainButton"
  >
    {{ buttonText }}
  </button>
</template>
<style scoped lang="scss">
.mainButton {
  cursor: pointer;
  padding: 0.4em;
  border-radius: 0.5em;
  white-space: nowrap;
}
</style>
