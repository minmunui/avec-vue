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
      <div class="icon-wrapper">
        <div class="icon">
          minmunui
        </div>
      </div>
      <nav class="top-nav">
        <router-link class="header-element" :to="{name : 'landing'}">{{ $t('Home') }}</router-link>
        <router-link class="header-element" :to="{name : 'creations'}">{{ $t('Creations') }}</router-link>
        <router-link class="header-element" :to="{name : 'about'}">{{ $t('About') }}</router-link>
        <router-link class="header-element" :to="{name : 'blog'}">{{ $t('Blog') }}</router-link>
      </nav>
    </header>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style.scss';

.top-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;

  @media (max-width: $mobile-width) {
    position: relative;
  }
}

header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--global-width);
  color: var(--color-text);
  position: relative;

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


.top-nav > a {
  text-decoration: none;
  color: var(--color-text);
}

.icon-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  @media (max-width: $mobile-width) {
    justify-content: center;
  }
}

.icon {
  font-size: 2rem;
  background: linear-gradient(to left, var(--theme-red), var(--theme-blue));
  font-weight: bolder;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>