<script setup lang="ts">
import { lateralMenu } from '@/mocks/lateral-menu.json'
import { connectWithTwitchApi } from '@/services/ConnectWithTwitchApi'
import PopularChannel from '@/components/layouts/lateralMenu/PopularChannel.vue'
import type { arrayStreams } from '@/interfaces/streams'

const api = new connectWithTwitchApi()
const popularStreams = await api.useGetHttpMethod<arrayStreams>(
  'helix/streams?first=8&type=live&language=es&sort=viewer_count'
)
</script>
<template>
  <section class="lateral-container">
    <h2 class="lateral-container__h2">{{ lateralMenu.popularTitle }}</h2>
    <article
      v-for="stream in popularStreams.data"
      :key="stream.id"
      class="lateral-container__channel"
    >
      <nuxtLink href="/" class="lateral-container__redirection">
        <PopularChannel :stream-data="stream" />
      </nuxtLink>
    </article>
  </section>
</template>
<style scoped lang="scss">
.lateral-container {
  width: var(--d-lateral-menu-width);
  height: 100%;
  background-color: var(--c-background);
  position: fixed;
  left: 0;
  &__h2 {
    margin: 0.5em 0.5em 0.25em;
    font-size: 1.125em;
  }
  &__channel {
    width: 100%;
    height: 2.5em;
    @include flex(column, $align: flex-start, $gap: 1em);
    padding: 0 1em;
  }
  &__redirection {
    width: 100%;
  }
  @include responsive(48em) {
    width: var(--d-lateral-menu-width-mobile);
    &__h2 {
      display: none;
    }
  }
}
</style>
