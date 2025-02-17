<script setup lang="ts">
import { connectWithTwitchApi } from '@/services/ConnectWithTwitchApi'
import type { arrayChannels } from '@/interfaces/channels'
import type { Streams } from '@/interfaces/streams'
import { formatTwitchPreview } from '@/utils/formatTwitchPreview'

const props = defineProps<{ streamData: Streams }>()

const api = new connectWithTwitchApi()
const channelData = await api.useGetHttpMethod<arrayChannels>(
  `helix/search/channels?query=${props.streamData.user_login}&live_only=true&first=1`
)

const streamTagsMap = new Map()
for (let index = 0; index < props.streamData.tags.length; index++) {
  if (index >= 2) {
    break
  }
  streamTagsMap.set(index, props.streamData.tags[index])
}
const thumbnail = formatTwitchPreview(props.streamData.thumbnail_url, '300', '200')
</script>
<template>
  <article class="stream-card-container">
    <NuxtLink
      :href="`/${streamData.user_login}`"
      class="stream-card-container__link"
    >
      <NuxtImg :src="thumbnail" alt="Image of the live stream" />
      <div class="stream-card-container__info">
        <NuxtImg
          :src="channelData.data[0].thumbnail_url"
          alt="Image of the user profile"
          class="stream-card-container__channel-logo"
        />
        <div class="stream-card-container__text-container">
          <p class="stream-card-container__text">{{ streamData.title }}</p>
          <p class="stream-card-container__text stream-card-container__text--grey">
            {{ streamData.user_name }}
          </p>
          <p class="stream-card-container__text stream-card-container__text--grey">
            {{ streamData.game_name }}
          </p>
          <div class="stream-card-container__tag-container">
            <p
              class="stream-card-container__tag"
              v-for="[key, value] in streamTagsMap"
              :key="key"
            >
              {{ value }}
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
<style scoped lang="scss">
.stream-card-container {
  &__link {
    @include flex(column, $align: flex-start, $gap: 0.5em);
  }
  &__channel-logo {
    width: 2.5em;
    height: 2.5em;
    border-radius: 2em;
  }
  &__info {
    @include flex($align: normal, $justify: normal, $gap: 0.75em);
  }
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
