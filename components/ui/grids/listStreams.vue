<script setup lang="ts">
import type { arrayStreams } from '@/interfaces/streams'
import cardStream from '@/components/ui/cards/cardStream.vue'
import { home } from '@/mocks/home.json'
import arrowDown from '@/svgs/arrowDown24.vue'

defineProps<{ title: String; streamData: arrayStreams }>()
</script>
<template>
  <section class="stream-grid-container">
    <h2>{{ title }}</h2>
    <section class="stream-grid-container__cards-container">
      <div
        v-for="stream in streamData.data"
        :key="stream.id"
        class="stream-grid-container__card"
      >
        <cardStream :stream-data="stream" />
      </div>
    </section>
    <div class="stream-grid-container__line-container">
      <div class="stream-grid-container__line"></div>
      <div class="stream-grid-container__more-container">
        <p class="stream-grid-container__more-text">{{ home.showMore }}</p>
        <arrowDown class="stream-grid-container__more-arrow" />
      </div>
      <div class="stream-grid-container__line"></div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.stream-grid-container {
  @include flex(column, $align: flex-start, $gap: 0.5em);
  &__cards-container {
    @include flex($justify: flex-start, $wrap: wrap, $gap: 1.5em);
    height: 19.0625em;
    overflow: hidden;
  }
  &__card {
    width: 18.75em;
  }
  &__line-container {
    width: 100%;
    @include flex($gap: 1em);
  }
  &__line {
    flex-grow: 1;
    height: 0.05em;
    background-color: var(--c-background-button);
  }
  &__more-container {
    @include flex();
    cursor: pointer;
  }
  &__more-text {
    color: var(--c-principal);
    white-space: nowrap;
  }
  &__more-arrow {
    width: fit-content;
    height: fit-content;
  }
  @include responsive(48em) {
    &__cards-container {
      height: 17.0625rem;
    }
    &__card {
      width: 15.75rem;
    }
  }
}
</style>
