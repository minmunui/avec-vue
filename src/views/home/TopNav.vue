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
      <div class="icon header-element">
        minmunui
      </div>
      <nav class="top-nav">
        <router-link class="header-element" :to="{name : 'landing'}">{{ $t('Home') }}</router-link>
        <router-link class="header-element" :to="{name : 'creations'}">{{ $t('Creations') }}</router-link>
        <router-link class="header-element" :to="{name : 'about'}">{{ $t('About') }}</router-link>
        <router-link class="header-element" :to="{name : 'blog'}">{{ $t('Blog') }}</router-link>
      </nav>
      <div class="menu header-element">
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
  color: var(--color-text);
}

.header-element {
  padding: 10px 20px;
}

.nav-background {
  background-color: var(--color-background);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top-nav {
  display: flex;
}

.top-nav > a {
  text-decoration: none;
  color: var(--color-text);

  &:hover {
  }
}
</style>