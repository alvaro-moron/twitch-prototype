<script setup lang="ts">
defineProps({
  searchText: String,
})
import searcher from '@/svgs/search24.vue'
</script>
<template>
  <section class="searcher-container">
    <input class="searcher-container__input" :placeholder="searchText" type="text" />
    <button class="searcher-container__button"><searcher /></button>
  </section>
</template>
<style scoped lang="scss">
.searcher-container {
  @include flex($align: stretch);
  &__input {
    width: 20em;
    padding: 0.2em;
    border: 0.0625rem solid #67676b;
  }
  &__input::placeholder {
    color: #67676b;
  }
  &__button {
    background-color: var(--c-background-button);
    padding: 0.2em;
    border-radius: 0 0.5em 0.5em 0;
  }
}
</style>
