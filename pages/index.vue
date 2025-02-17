<script setup lang="ts">
import { connectWithTwitchApi } from '@/services/ConnectWithTwitchApi'
import type { arrayStreams } from '@/interfaces/streams'
import type { arrayCategories } from '@/interfaces/categories'
import listStreams from '@/components/ui/grids/listStreams.vue'
import listCategories from '@/components/ui/grids/listCategories.vue'
import { home } from '@/mocks/home.json'

const api = new connectWithTwitchApi()

const popularStreamsSpa = await api.useGetHttpMethod<arrayStreams>(
  'helix/streams?first=3&type=live&language=es&sort=viewer_count'
)

const popularStreamsEng = await api.useGetHttpMethod<arrayStreams>(
  'helix/streams?first=3&type=live&language=en&sort=viewer_count'
)

const popularCategories = await api.useGetHttpMethod<arrayCategories>(
  'helix/games/top?first=6&sort=viewer_count'
)
</script>
<template>
  <section class="home-container">
    <listStreams :title="home.gridOne.title" :stream-data="popularStreamsSpa" />
    <listStreams :title="home.gridTwo.title" :stream-data="popularStreamsEng" />
    <listCategories
      :title="home.gridCategories.title"
      :categorie-data="popularCategories"
    />
    <listStreams :title="home.gridTwo.title" :stream-data="popularStreamsEng" />
    <listStreams :title="home.gridOne.title" :stream-data="popularStreamsSpa" />
  </section>
</template>
<style scoped lang="scss">
.home-container {
  padding: 1em 1.5em 0;
}
</style>
