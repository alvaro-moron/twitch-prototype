<script setup lang="ts">
import type { arrayCategories } from '@/interfaces/categories'
import cardCategorie from '@/components/ui/cards/cardCategorie.vue'
defineProps<{ title: String; categorieData: arrayCategories }>()
</script>
<template>
  <section class="stream-grid-container">
    <h2>{{ title }}</h2>
    <section class="stream-grid-container__cards-container">
      <div
        v-for="categorie in categorieData.data"
        :key="categorie.id"
        class="stream-grid-container__card"
      >
        <cardCategorie :categorie-data="categorie" />
      </div>
    </section>
  </section>
</template>
<style scoped lang="scss">
.stream-grid-container {
  @include flex(column, $align: flex-start, $gap: 0.5em);
  &__cards-container {
    @include flex($justify: flex-start, $wrap: wrap, $gap: 1.5em);
    height: 19.125em;
    overflow: hidden;
  }
  &__card {
    width: 9.375em;
  }
}
</style>
