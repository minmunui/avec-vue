<script>

import { getTest } from '@/api/api.js'
import { defineComponent } from 'vue'

export default defineComponent({
  methods: { getTest },
  i18nKo: {
    Home: '홈',
    Creations: '창작물',
    Blog: '블로그',
    About: '소개'
  },
  i18nEn: {}
})

</script>

<template>
  <div class="nav-background">
    <header>
      <div class="left">
        minmunui
      </div>
      <nav class="top-nav">
        <router-link :to="{name : 'landing'}">{{ $t('Home') }}</router-link>
        <router-link :to="{name : 'creations'}">{{ $t('Creations') }}</router-link>
        <router-link :to="{name : 'about'}">{{ $t('About') }}</router-link>
        <router-link :to="{name : 'blog'}">{{ $t('Blog') }}</router-link>
      </nav>
      <div class="right">
        menu
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: var(--global-width);
}

.nav-background {
  background-color: var(--color-background);
  width:100%;
}

.top-nav {
  display: flex;
  gap: 20px;
}

.top-nav > a {
  color: var(--color-text);
  text-decoration: none;

  &:hover {
  }
}
</style>