<script setup lang="ts">
import { connectWithTwitchApi } from '@/services/ConnectWithTwitchApi'
import type { arrayStreams } from '@/interfaces/streams'
import type { arrayChannels } from '@/interfaces/channels'
import titleBlock from '@/components/ui/stream/titleBlock.vue'
import moreBlock from '@/components/ui/stream/moreBlock.vue'

definePageMeta({
  layout: false,
})
const streamLayout = 'stream'

const route = useRoute()
const name = route.params.name

const api = new connectWithTwitchApi()

const streamData = await api.useGetHttpMethod<arrayStreams>(
  `helix/streams?user_login=${name}&live_only=true&first=1`
)
const channelData = await api.useGetHttpMethod<arrayChannels>(
  `helix/search/channels?query=${name}&live_only=true&first=1`
)
</script>
<template>
  <NuxtLayout :name="streamLayout">
    <section class="stream-container">
      <div class="stream-container__video-embedded">
        <iframe
          :src="`https://player.twitch.tv/?channel=${name}&parent=moron-twitch.vercel.app`"
          height="100%"
          width="100%"
          allowfullscreen
        >
        </iframe>
      </div>
      <div class="stream-container__all-text">
        <titleBlock
          :stream-data="streamData.data[0]"
          :channel-data="channelData.data[0]"
        />
        <moreBlock :stream-data="streamData.data[0]" />
      </div>
    </section>
  </NuxtLayout>
</template>
<style scoped lang="scss">
.stream-container {
  &__video-embedded {
    aspect-ratio: 16 / 9;
  }
  &__all-text {
    @include flex(column, $align: normal, $gap: 1em);
    padding: 0.75em;
  }
  @include responsive(48em) {
    height: 15vh;
  }
}
</style>
