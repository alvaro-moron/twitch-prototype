<script setup lang="ts">
import type { Channels } from '@/interfaces/channels'
import type { Streams } from '@/interfaces/streams'
import { stream } from '@/mocks/stream.json'
import favorites from '@/svgs/favorite24.vue'
import star from '@/svgs/star24.vue'
import download from '@/svgs/download24.vue'
import person from '@/svgs/person24.vue'
import threeDots from '@/svgs/threeDots24.vue'
import { caclLiveTime } from '@/utils/caclLiveTime'
const props = defineProps<{ streamData: Streams; channelData: Channels }>()

const streamTagsMap = new Map()
for (let index = 0; index < props.streamData.tags.length; index++) {
  streamTagsMap.set(index, props.streamData.tags[index])
}

const streamDuration = ref('')
onMounted(() => {
  streamDuration.value = caclLiveTime(props.streamData.started_at)
  setInterval(() => {
    streamDuration.value = caclLiveTime(props.streamData.started_at)
  }, 1000)
})
</script>
<template>
  <article class="main-info">
    <NuxtImg
      :src="channelData.thumbnail_url"
      alt="Image of the user profile"
      class="main-info__logo"
    ></NuxtImg>
    <div class="main-info__title-group">
      <div class="main-info__first-line">
        <h1 class="main-info__h1">{{ streamData.user_name }}</h1>
        <div class="main-info__buttons">
          <div class="main-info__button main-info__button--blue">
            <favorites />
            <button>
              {{ stream.buttons.follow }}
            </button>
          </div>
          <div class="main-info__button">
            <star />
            <button>
              {{ stream.buttons.subscribe }}
            </button>
          </div>
        </div>
      </div>
      <div class="main-info__second-line">
        <p>{{ streamData.title }}</p>
        <div class="main-info__time-things">
          <div class="main-info__viewers">
            <person />
            {{ streamData.viewer_count }}
          </div>
          <p class="main-info__live-time">{{ streamDuration }}</p>
          <download />
          <threeDots />
        </div>
      </div>
      <div class="main-info__third-line">
        <p>{{ streamData.game_name }}</p>
        <div class="main-info__tags">
          <p v-for="[key, value] in streamTagsMap" :key="key" class="main-info__tag">
            {{ value }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
<style scoped lang="scss">
.main-info {
  @include flex($align: center, $justify: space-between, $gap: 0.5em);
  &__logo {
    width: 4em;
    height: 4em;
    border-radius: 2em;
  }
  &__title-group {
    width: -webkit-fill-available;
    @include flex(column, $align: flex-start, $gap: 0.5em);
  }
  &__first-line {
    width: 100%;
    @include flex(
      $align: flex-start,
      $justify: space-between,
      $wrap: wrap,
      $gap: 0.5em
    );
  }
  &__h1 {
    font-size: var(--s-font-higher);
  }
  &__buttons {
    @include flex($gap: 0.5em);
  }
  &__button {
    @include flex($gap: 0.5em);
    background-color: var(--c-background-button);
    cursor: pointer;
    padding: 0.2em 0.4em;
    border-radius: 0.5em;
    &--blue {
      background-color: var(--c-principal);
    }
  }
  &__second-line {
    width: 100%;
    @include flex(
      $align: flex-start,
      $justify: space-between,
      $wrap: wrap,
      $gap: 0.5em
    );
  }
  &__time-things {
    @include flex($gap: 0.5em);
  }
  &__viewers {
    @include flex();
  }
  &__live-time {
    white-space: nowrap;
  }
  &__third-line {
    @include flex($justify: flex-start, $wrap: wrap, $gap: 0.5em);
  }
  &__tags {
    @include flex($justify: flex-start, $wrap: wrap, $gap: 0.25em);
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
  @include responsive(48em) {
    @include flex($align: normal, $justify: space-between, $gap: 0.5em);
  }
}
</style>
