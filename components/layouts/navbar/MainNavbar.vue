<script setup lang="ts">
import { navbar } from '@/mocks/navbar.json'
import twitchIcon from '@/assets/images/twitch-logo.webp'
import threeDots from '@/svgs/threeDots24.vue'
import searcher from '@/components/layouts/navbar/Searcher.vue'
import mainButton from '@/components/ui/MainButton.vue'
import person from '@/svgs/person24.vue'
import crown from '@/svgs/crown24.vue'
</script>
<template>
  <section class="navbar-container">
    <article class="navbar-container__left">
      <nuxtLink href="/" class="navbar-container__link">
        <img
          :src="twitchIcon"
          alt="Image of the twitch icon"
          class="navbar-container__logo-img"
        />
      </nuxtLink>
      <nuxtLink href="/" class="navbar-container__link navbar-container__title">
        <h2>{{ navbar.webTitle }}</h2>
      </nuxtLink>
      <threeDots class="navbar-container__threeDots" />
    </article>
    <article class="navbar-container__center">
      <searcher :search-text="navbar.searchPlaceholder" />
    </article>
    <article class="navbar-container__right">
      <crown />
      <mainButton :button-text="navbar.loginButtonText" />
      <mainButton
        :button-text="navbar.signupButtonText"
        background-color="var(--c-principal)"
      />
      <person />
    </article>
  </section>
</template>
<style scoped lang="scss">
.navbar-container {
  width: 100%;
  height: var(--d-navbar-height);
  @include flex($justify: space-between);
  padding: 0 0.5rem;
  background-color: var(--c-background-navbar);
  position: fixed;
  &__left {
    @include flex($gap: 1em);
  }
  &__link {
    @include flex($gap: 1em);
  }
  &__title {
    display: block;
  }
  &__logo-img {
    width: 2.5em;
  }
  &__threeDots {
    width: auto;
  }
  &__center {
    display: block;
  }
  &__right {
    @include flex($gap: 1em);
  }
  @include responsive(48em) {
    &__title {
      display: none;
    }
    &__center {
      display: none;
    }
  }
}
</style>
