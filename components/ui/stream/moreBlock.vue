<script setup lang="ts">
import type { Streams } from '@/interfaces/streams'
import type { arrayFollowers } from '@/interfaces/followers'
import type { arrayUsers } from '@/interfaces/Users'
import { stream } from '@/mocks/stream.json'
import { connectWithTwitchApi } from '@/services/ConnectWithTwitchApi'
import youtube from '@/svgs/youtube24.vue'
import instagram from '@/svgs/instagram24.vue'
import twitter from '@/svgs/twitter24.vue'
import tiktok from '@/svgs/tiktok24.vue'

const props = defineProps<{ streamData: Streams }>()

const api = new connectWithTwitchApi()

const FollowersData = await api.useGetHttpMethod<arrayFollowers>(
  `helix/channels/followers?broadcaster_id=${props.streamData.user_id}`
)
const UserData = await api.useGetHttpMethod<arrayUsers>(
  `helix/users?id=${props.streamData.user_id}`
)
</script>
<template>
  <article class="more-info">
    <h2 class="more-info__title">
      {{ `${stream.about.title} ${streamData.user_login}` }}
    </h2>
    <div class="more-info__followers">
      <p>{{ `${FollowersData.total} followers` }}</p>
      <p>{{ UserData.data[0].description }}</p>
      <div class="more-info__line"></div>
      <div class="more-info__social-container">
        <div class="more-info__social-item">
          <youtube />
          <p>{{ 'Youtube' }}</p>
        </div>
        <div class="more-info__social-item">
          <instagram />
          <p>{{ 'Instagram' }}</p>
        </div>
        <div class="more-info__social-item">
          <twitter />
          <p>{{ 'Twitter' }}</p>
        </div>
        <div class="more-info__social-item">
          <tiktok />
          <p>{{ 'TikTok' }}</p>
        </div>
      </div>
    </div>
  </article>
</template>
<style scoped lang="scss">
.more-info {
  @include flex(column, $align: normal, $justify: normal, $gap: 0.75em);
  &__title {
    font-size: var(--s-font-higher);
  }
  &__followers {
    @include flex(column, $align: normal, $justify: normal, $gap: 0.5em);
    padding: 0.5em;
    background-color: var(--c-background-navbar);
  }
  &__line {
    border: 0.0625em solid #35353b;
  }
  &__social-container {
    @include flex($align: normal, $justify: normal, $gap: 1em);
  }
  &__social-item {
    @include flex($justify: normal, $gap: 0.5em);
  }
}
</style>
