<script setup lang="ts">
import type { Categories } from '@/interfaces/categories'
import type { arrayStreams } from '@/interfaces/streams'
import { connectWithTwitchApi } from '@/services/ConnectWithTwitchApi'

const props = defineProps<{ categorieData: Categories }>()

const thumbnail = formatTwitchPreview(props.categorieData.box_art_url, '200', '300')

const api = new connectWithTwitchApi()

const gameStreams = await api.useGetHttpMethod<arrayStreams>(
  `helix/streams?game_id=${props.categorieData.id}&sort=viewer_count&first=100`
)

const totalViewers = gameStreams.data.reduce(
  (sum, stream) => sum + stream.viewer_count,
  0
)
</script>
<template>
  <article class="stream-card-container">
    <NuxtImg :src="thumbnail" alt="Image of the categorie"></NuxtImg>
    <p class="stream-card-container__text">
      {{ categorieData.name }}
    </p>
    <p class="stream-card-container__text stream-card-container__text--grey">
      {{ `${totalViewers} viewers` }}
    </p>
    <div class="stream-card-container__tag-container"></div>
  </article>
</template>
<style scoped lang="scss">
.stream-card-container {
  @include flex(column, $align: flex-start, $gap: 0.5em);
  &__text-container {
    @include flex(column, $align: flex-start, $gap: 0.2em);
  }
  &__text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    &--grey {
      font-size: var(--s-font-less);
      color: var(--c-grey-fonts);
    }
  }
  &__tag-container {
    @include flex($gap: 0.25em);
  }
  &__tag {
    width: fit-content;
    height: fit-content;
    background-color: var(--c-background-lateral-menu);
    border-radius: 1em;
    padding: 0.5em;
    font-size: var(--s-font-least);
    color: var(--c-grey-fonts);
  }
}
</style>
