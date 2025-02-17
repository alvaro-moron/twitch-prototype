<script setup lang="ts">
import { connectWithTwitchApi } from '@/services/ConnectWithTwitchApi'
import type { arrayChannels } from '@/interfaces/channels'
import type { Streams } from '@/interfaces/streams'

const props = defineProps<{ streamData: Streams }>()

const api = new connectWithTwitchApi()
const channelData = await api.useGetHttpMethod<arrayChannels>(
  `helix/search/channels?query=${props.streamData.user_login}&live_only=true&first=1`
)
</script>
<template>
  <div class="popular-container">
    <NuxtLink :href="`/${streamData.user_login}`" class="popular-container__link">
      <NuxtImg
        :src="channelData.data[0].thumbnail_url"
        alt="Image of the user profile"
        class="popular-container__img"
      />
      <div class="popular-container__info">
        <div class="popular-container__texts">
          <p class="popular-container__channel">{{ streamData.user_name }}</p>
          <p class="popular-container__activity">{{ streamData.game_name }}</p>
        </div>
        <div class="popular-container__viewers">
          <div class="popular-container__red-circle"></div>
          <p>{{ streamData.viewer_count }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
<style scoped lang="scss">
.popular-container {
  &__link {
    margin: 0.25em 0 0;
    @include flex(row, $gap: 1em);
  }
  &__img {
    width: 1.875em;
    height: 1.875em;
    border-radius: 1em;
  }
  &__info {
    @include flex($justify: space-between);
    width: 100%;
  }
  &__texts {
    display: block;
    @include flex(column, $align: flex-start, $gap: 0.2em);
  }
  &__channel {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
  }
  &__activity {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    font-size: var(--s-font-less);
    color: var(--c-grey-fonts);
  }
  &__viewers {
    @include flex($gap: 0.25em);
  }
  &__red-circle {
    width: 0.5em;
    height: 0.5em;
    background-color: red;
    border-radius: 1em;
  }
  @include responsive(48em) {
    &__info {
      display: none;
    }
  }
}
</style>
